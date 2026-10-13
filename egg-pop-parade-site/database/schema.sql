-- Optional future CMS schema. Static site does not require a database.
CREATE TABLE game_info (id INTEGER PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL, play_url TEXT NOT NULL);
CREATE TABLE worlds (id INTEGER PRIMARY KEY, name TEXT NOT NULL, level_start INTEGER NOT NULL, level_end INTEGER NOT NULL, description TEXT, asset_path TEXT);
CREATE TABLE features (id INTEGER PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL, icon TEXT);
CREATE TABLE faqs (id INTEGER PRIMARY KEY, question TEXT NOT NULL, answer TEXT NOT NULL, sort_order INTEGER DEFAULT 0);
CREATE TABLE contact_messages (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, topic TEXT, message TEXT NOT NULL, created_at TEXT NOT NULL, status TEXT DEFAULT 'new');
CREATE TABLE social_links (platform TEXT PRIMARY KEY, url TEXT NOT NULL DEFAULT '');
