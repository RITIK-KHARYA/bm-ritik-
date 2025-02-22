import axios from "axios";
import * as cheerio from "cheerio";

export const getMetadata = async (url:string) => {
  try {
    const startTime = Date.now();
    const { data } = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const $ = cheerio.load(data);

    const title =
      $('meta[property="og:title"]').attr("content") || $("title").text() || "";

    const description =
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content") ||
      "";

    const image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[property="twitter:image"]').attr("content") ||
      $('meta[name="thumbnail"]').attr("content") ||
      $('link[rel="image_src"]').attr("href") ||
      "";

    const favicon =
      $('link[rel="icon"]').attr("href") ||
      $('link[rel="shortcut icon"]').attr("href") ||
      $('link[rel="apple-touch-icon"]').attr("href") ||
      "";

    const metadata = {
      title,
      description,
      image: image ? new URL(image, url).href : "",
      icon: favicon ? new URL(favicon, url).href : "",
    };

    const endTime = Date.now();
    console.log(`Metadata fetched in ${(endTime - startTime) / 1000} seconds`);
    console.log(metadata);
    return metadata;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null;
  }
};

getMetadata(
  "https://stackoverflow.com/questions/62852481/how-to-speed-up-puppeteer"
);
