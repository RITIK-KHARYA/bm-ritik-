import puppeteer from "puppeteer";

export const getMetadata = async (url: string) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const metadata = await page.evaluate(() => {
      const title =
        document.querySelector('meta[property="og:title"]') ||
        document.querySelector("title") ||
        "";
      
      const description =
        document.querySelector('meta[property="og:description"]') ||
        document.querySelector("meta[name='description']") ||
        "";

      const image =
        document
          .querySelector('meta[property="og:image"]')
          ?.getAttribute("content") ||
        document
          .querySelector('meta[property="twitter:image"]')
          ?.getAttribute("content") ||
        document
          .querySelector('meta[name="thumbnail"]')
          ?.getAttribute("content") ||
        document.querySelector('link[rel="image_src"]')?.getAttribute("href") ||
        "";
        const favicon =
          document.querySelector('link[rel="icon"]')?.getAttribute("href") ||
          document
            .querySelector('link[rel="shortcut icon"]')
            ?.getAttribute("href") ||
          document
            .querySelector('link[rel="apple-touch-icon"]')
            ?.getAttribute("href") ||
          "";
      return {
        title: title ? title.getAttribute("content") : "",
        description: description ? description.getAttribute("content") : "",
        image: image ? new URL(image).href : "",
        icon : favicon ? new URL(favicon).href : "",
      };
    });
    await browser.close();
    return metadata;
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }
};

