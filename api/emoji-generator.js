import { createNotionPageWithEmoji } from '../client/notion-page-generator.js';

export default async function handler(req, res) {
  const apiKey = req.headers['x-api-key'];

  if (apiKey !== process.env.API_SECRET_KEY) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { title, content } = req.body;

  try {
    const page = await createNotionPageWithEmoji(title, content);
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
