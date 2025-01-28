import { updateNotionPageWithEmoji } from '../client/notion-page-updater.js';

export default async function handler(req, res) {
  const apiKey = req.headers['api-secret-key'];

  if (apiKey !== process.env.API_SECRET_KEY) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { pageId } = req.body;

  try {
    const page = await updateNotionPageWithEmoji(pageId);
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
