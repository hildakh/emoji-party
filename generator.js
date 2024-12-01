import fs from "fs";
import terminalImage from 'terminal-image';

import { emojiList } from "./emojiList.js";
import { objectEmojis } from "./objectEmojiList.js";
import { scrapeEmoji } from "./scrapeEmoji.js";

const getRandomEmoji = async () => {
  const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
  const randomObjectEmoji = objectEmojis[Math.floor(Math.random() * objectEmojis.length)];
  const url = `https://emojik.vercel.app/s/${randomEmoji}_${randomObjectEmoji}?size=128`;

  const emojiImageSrc = await scrapeEmoji(url);

  if (emojiImageSrc) {
    // Download the image and save it to a file
    const response = await fetch(emojiImageSrc);
    const buffer = await response.arrayBuffer();
    const imageBuffer = Buffer.from(buffer);

    // Display the image in the terminal
    console.log(await terminalImage.buffer(imageBuffer));


    fs.writeFileSync(`./output/${randomEmoji}_${randomObjectEmoji}.png`, Buffer.from(buffer));
    console.log(`Emoji image saved as ${randomEmoji}_${randomObjectEmoji}.png`);
  }
};

getRandomEmoji();
