import { NextResponse } from "next/server.js";
import type { NextRequest } from "next/server.js";

export function middleware(request: NextRequest){
  if(request.nextUrl.pathname === '/'){
    return NextResponse.redirect(new URL('/home', request.url))
  }
}

export const config = {
  matcher: ['/:path*']
}