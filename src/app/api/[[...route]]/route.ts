import bookmarkApp from "./bookmarks";
import { auth } from "@/lib/auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import authApp from "./auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});


app.route("/bookmarks",bookmarkApp)
app.route("/",authApp)
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);

