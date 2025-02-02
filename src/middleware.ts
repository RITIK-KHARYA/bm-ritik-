import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextResponse, type NextRequest } from "next/server";
import { getSession } from "./actions/session";

type Session = typeof auth.$Infer.Session;

export default async function authMiddleware(request: NextRequest) {
  const session = await getSession()

  if (!session) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
