import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import { Client } from '@notionhq/client';
import { generateRandomEmoji } from './generator.js';

const notion = new Client({ auth: process.env.NOTION_KEY })

export const createNotionPageWithEmoji = async (
  title = 'New page with Emoji',
  content = 'You made this page using the Notion API. Pretty cool, huh?',
) => {
  try {
    const { url } = await generateRandomEmoji();

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

await createNotionPageWithEmoji();
