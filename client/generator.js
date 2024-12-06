import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import { emojiList } from './emojiList.js';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY })

export const createNotionPageWithEmoji = async (title, content) => {
  try {
    const randomEmoji1 = emojiList[Math.floor(Math.random() * emojiList.length)]
    const randomEmoji2 = emojiList[Math.floor(Math.random() * emojiList.length)]

    const response = await fetch(
      `https://emojik.vercel.app/s/${encodeURIComponent(randomEmoji1)}_${encodeURIComponent(randomEmoji2)}?size=128`
    )
    const { url } = await response;

    // Create page with emoji as icon
    return await notion.pages.create({
      parent: { 
        page_id: process.env.NOTION_PARENT_PAGE_ID,
       },
      icon: {
        type: "external",
        external: { url }
      },
      properties: {
        title: { title: [{ text: { content: title } }] },
      },
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content,
                },
              },
            ],
          },
        },
      ],
    })
  } catch (err) {
    console.error(err)
    return null
  }
}

await createNotionPageWithEmoji(
  'new Emoji page', 
  'You made this page using the Notion API. Pretty cool, huh? We hope you enjoy building with us.'
);