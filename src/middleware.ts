import { NextRequest, NextResponse } from "next/server";


export default async function authMiddleware(request: NextRequest) {
  
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
