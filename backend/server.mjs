import 'dotenv/config';
import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import nodemailer from 'nodemailer';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../public');
const port=Number(process.env.PORT||4173);
const game={name:'Egg Pop Parade',levels:200,worlds:10,playUrl:'https://buildegg.netlify.app/'};
const worlds=[['Happy Garden','1–20'],['Egg Beach','21–40'],['Snow Egg Land','41–60'],['Dino Valley','61–80'],['Space Eggs','81–100'],['Rainbow Kingdom','101–120'],['Sunset Village','121–140'],['Crystal Caves','141–160'],['Jungle Jamboree','161–180'],['Neon Moon Park','181–200']].map(([name,levels],i)=>({id:i+1,name,levels}));
const contactFrom=process.env.CONTACT_FROM||process.env.SMTP_USER;
const contactTo=process.env.CONTACT_TO;
const smtpHost=process.env.SMTP_HOST;
const smtpUser=process.env.SMTP_USER;
const smtpPass=process.env.SMTP_PASS;
const smtpPort=Number(process.env.SMTP_PORT||587);
const mailTransport=smtpHost&&smtpUser&&smtpPass&&contactFrom&&contactTo
	?nodemailer.createTransport({host:smtpHost,port:smtpPort,secure:process.env.SMTP_SECURE==='true',auth:{user:smtpUser,pass:smtpPass},connectionTimeout:15000,greetingTimeout:15000,socketTimeout:20000})
	:null;
if(!mailTransport){
	const missing=['SMTP_HOST','SMTP_USER','SMTP_PASS','CONTACT_TO'].filter(key=>!process.env[key]);
	console.warn(`Contact form email is disabled. Missing in .env: ${missing.join(', ')||'none'}. Copy .env.example to .env and fill it in.`);
}
const contactTopics=new Set(['General question','Bug report','Feedback','Other']);

function sendJson(response,statusCode,payload){
	response.statusCode=statusCode;
	response.setHeader('Content-Type','application/json; charset=utf-8');
	response.end(JSON.stringify(payload));
}

function requestError(statusCode,message){
	const error=new Error(message);
	error.statusCode=statusCode;
	return error;
}

async function readJsonBody(request){
	const chunks=[];
	let size=0;
	for await(const chunk of request){
		size+=chunk.length;
		if(size>10000)throw requestError(413,'Message is too large.');
		chunks.push(chunk);
	}
	let data;
	try{data=JSON.parse(Buffer.concat(chunks).toString('utf8'));}
	catch{throw requestError(400,'Invalid request body.');}
	if(!data||typeof data!=='object'||Array.isArray(data))throw requestError(400,'Invalid request body.');
	return data;
}

async function handleContact(request,response){
	try{
		const data=await readJsonBody(request);
		const name=typeof data.name==='string'?data.name.trim():'';
		const email=typeof data.email==='string'?data.email.trim():'';
		const topic=typeof data.topic==='string'?data.topic.trim():'';
		const message=typeof data.message==='string'?data.message.trim():'';
		if(!name||name.length>100)throw requestError(400,'Enter a name of 1 to 100 characters.');
		if(email.length>200||!/^\S+@\S+\.\S+$/.test(email))throw requestError(400,'Enter a valid email address.');
		if(!contactTopics.has(topic))throw requestError(400,'Choose a valid message topic.');
		if(!message||message.length>3000)throw requestError(400,'Enter a message of 1 to 3000 characters.');
		if(!mailTransport){
			sendJson(response,503,{error:'Email delivery is not configured yet. Please try again later.'});
			return;
		}
		await mailTransport.sendMail({
			from:contactFrom,
			to:contactTo,
			replyTo:email,
			subject:`Egg Pop Parade contact: ${topic}`,
			text:[`Name: ${name}`,`Email: ${email}`,`Topic: ${topic}`,'','Message:',message].join('\n')
		});
		sendJson(response,200,{message:'Thanks for reaching out. Your message has been sent.'});
	}catch(error){
		if(error.statusCode){sendJson(response,error.statusCode,{error:error.message});return;}
		console.error('Contact email delivery failed:',error.message);
		sendJson(response,502,{error:'We could not send your message. Please try again later.'});
	}
}

const server=http.createServer(async(request,response)=>{
	const url=new URL(request.url,'http://localhost');
	response.setHeader('X-Content-Type-Options','nosniff');
	response.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
	response.setHeader('Content-Security-Policy',"default-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; img-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'");

	if(url.pathname.startsWith('/api/')){
		if(request.method==='GET'&&url.pathname==='/api/game'){sendJson(response,200,game);return;}
		if(request.method==='GET'&&url.pathname==='/api/worlds'){sendJson(response,200,worlds);return;}
		if(request.method==='GET'&&url.pathname==='/api/features'){
			sendJson(response,200,['Smart Egg Matching','Magic Collectibles','Missions & Rewards','Friends & Creatures','Pop Cash','200 Playable Levels','10 Magical Worlds','3-Star Mastery']);
			return;
		}
		if(request.method==='GET'&&url.pathname==='/api/faq'){
			sendJson(response,200,[{q:'How many levels?',a:'200 playable levels.'},{q:'How many worlds?',a:'10 magical worlds.'}]);
			return;
		}
		if(request.method==='POST'&&url.pathname==='/api/contact'){await handleContact(request,response);return;}
		sendJson(response,404,{error:'API route not found'});
		return;
	}

	let pathname=decodeURIComponent(url.pathname);
	if(pathname==='/'||!path.extname(pathname))pathname='/index.html';
	const file=path.resolve(root,'.'+pathname);
	if(file!==root&&!file.startsWith(root+path.sep)){response.statusCode=403;response.end('Forbidden');return;}
	try{
		const body=await readFile(file);
		const ext=path.extname(file);
		response.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.svg':'image/svg+xml'}[ext]||'application/octet-stream'));
		response.end(body);
	}catch{
		response.statusCode=404;
		response.end('Not found');
	}
});

server.listen(port,()=>console.log(`Egg Pop Parade website running at http://localhost:${port}`));