import { auth } from "@/lib/auth";
import { Hono } from "hono";

const authApp = new Hono()
.on(["POST", "GET"], "/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

export default authApp;