"use server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function extractTextFromHTML(
  url: string
): Promise<string> {
  try {
    const { data } = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const $ = cheerio.load(data);


    $("script").remove();
    $("style").remove();


    const textOnly = $("body")
      .text()
      .replace(/\r?\n|\r/g, " ") 
      .replace(/\s+/g, " ") 
      .trim()
  console.log(textOnly);
    return textOnly;
  } catch (error) {
    console.error("Error extracting text from HTML:", error);
    throw new Error("Failed to extract text from HTML");
  }
}
