import { NextResponse } from "next/server";
import { verifyJwtToken } from "./app/libs/auth";

export async function middleware(req) {
  const token = req.cookies.get("jwt")?.value;
  const verifiedToken =
    token &&
    (await verifyJwtToken(token).catch((err) => {
      console.log(err);
    }));

  if (
    req.nextUrl.pathname.startsWith("/login") ||
    (req.nextUrl.pathname.startsWith("/register") && !verifiedToken)
  ) {
    return;
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/login", "/register", "/"],
};
