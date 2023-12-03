export { default } from "next-auth/middleware";

export const config = {
  // matcher: ["/cart", "/wishlist"],
  matcher: ["/abc"],
};

// import { NextResponse } from "next/server";

// export function middleware() {
//   // return NextResponse.json({ mess: "helloe" });
//   return NextResponse.next();
// }
