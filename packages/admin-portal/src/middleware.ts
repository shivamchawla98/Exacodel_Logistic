import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/auth";
import { jwtDecode } from 'jwt-decode'

const AUTH_PAGES = ["/"];

export async function middleware(request: any) {
  // console.log(request.cookies);

  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("jwtToken") ?? { value: null };
  const hasVerifiedToken = token && (await verifyJwtToken(token));
  const isAuthPageRequested = ["/login", "/admin", "/vendor"].includes(nextUrl.pathname);
  const decodedToken: any = jwtDecode(token)
  
  if (isAuthPageRequested) {
    console.log("decodedToke usert : ", decodedToken?.userType);
    
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("jwtToken");
      return response;
    }
    if (decodedToken && decodedToken?.userType === 'ADMIN') {
      console.log("admin me");
      
      return NextResponse.next();
    }
    if (decodedToken && decodedToken?.userType === 'VENDOR' ) {
      if (nextUrl.pathname.startsWith('/admin')) {
        const response = NextResponse.redirect(new URL(`/`, url));
        response.cookies.delete("jwtToken");
        console.log("Gala aagye bro");
        return response;
      }
      return NextResponse.next();
    }
    const response = NextResponse.redirect(new URL(`/`, url));
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


  // return NextResponse.next();

}
export const config = { matcher: ["/login", "/admin", "/vendor"] };