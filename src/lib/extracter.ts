"use server"
import axios from "axios";
import * as cheerio from "cheerio";
import { redis } from "./redis";
import { metadata } from "./types";
import { isValidUrl } from "./utils";

export const getMetadata = async (url: string) => {
  try {
    const metadataKey = `${url}-metadata`;
    const cachedMetadata: metadata | null = await redis.get(metadataKey);
    if (cachedMetadata) {
      console.log("Cache hit", cachedMetadata);
      return cachedMetadata;
    }
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
    await redis.set(metadataKey, JSON.stringify(metadata), { ex: 60 * 5 });

    const endTime = Date.now();
    console.log(`Metadata fetched in ${(endTime - startTime) / 1000} seconds`);
    console.log(metadata);
    return metadata;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null;
  }
};

