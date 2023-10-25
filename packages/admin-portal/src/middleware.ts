import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/auth";

const AUTH_PAGES = ["/"];

const isAuthPages = (url: any) => AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request: any) {
    console.log(request.cookies);
    
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("jwtToken") ?? { value: null };
  const hasVerifiedToken = token && (await verifyJwtToken(token));
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("jwtToken");
      return response;
    }
    const response = NextResponse.redirect(new URL(`/approval`, url));
    return response;
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);
    const response = NextResponse.redirect(
      new URL(`/`, url)
    );
    response.cookies.delete("jwtToken");
    return response;
  }

  return NextResponse.next();

}
export const config = { matcher: ["/login", "/approval"] };