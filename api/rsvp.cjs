const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw_wwVZytC3LpTB7dSHbj7XlhyIoEcnaETV2nZwsoyYOhTuC9Emy9eF3dOhzEapBxIM/exec';

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Method Not Allowed' });
  }

  try {
    const googleRes = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await googleRes.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(googleRes.status).send(text);
  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).send({ error: 'Proxy failed' });
  }
}; 