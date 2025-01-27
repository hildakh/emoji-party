import { emojiList } from './emojiList.js';

export const generateRandomEmoji = async (
  randomEmoji1 = emojiList[Math.floor(Math.random() * emojiList.length)],
  randomEmoji2 = emojiList[Math.floor(Math.random() * emojiList.length)]
) => {
  const response = await fetch(
    `https://emojik.vercel.app/s/${encodeURIComponent(randomEmoji1)}_${encodeURIComponent(randomEmoji2)}?size=128`
  )

  if (!response.ok || response.headers.get('status') === '404') {
    return generateRandomEmoji();
  }

  return await response;
};
