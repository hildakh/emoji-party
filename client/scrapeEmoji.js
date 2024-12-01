import puppeteer from 'puppeteer';

export const scrapeEmoji = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url);

    // Wait for the image to load and extract the 'src' attribute
    const emojiImageSrc = await page.evaluate(async () => {
      // Wait for the page to load a little
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const emojiElement = document.querySelector('img');

      return emojiElement ? emojiElement.src : null;
    });

    if(emojiImageSrc) {
      return emojiImageSrc;
    } else {
      console.error('No emoji image found.');
      return null;
    }
  } catch {
    console.log('Error:', error);
  } finally {
    await browser.close();
  }
};