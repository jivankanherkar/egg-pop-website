// Handles the Contact form. The form markup lives in app.js; submissions go to /api/contact.
const FALLBACK_ERROR = 'We could not send your message. Please try again.';

document.addEventListener('submit', async event => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || form.id !== 'contact-form') return;
  event.preventDefault();
  if (!form.reportValidity()) return;

  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('.form-status');
  button.disabled = true;
  status.textContent = 'Sending your message...';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
    });
    let result = {};
    try { result = await response.json(); } catch { /* non-JSON response */ }
    if (!response.ok) throw new Error(result.error || FALLBACK_ERROR);
    status.textContent = result.message || 'Thanks for reaching out. Your message has been sent.';
    form.reset();
  } catch (error) {
    status.textContent = error.message || FALLBACK_ERROR;
  } finally {
    button.disabled = false;
  }
}, true);