import { withAuth } from "next-auth/middleware";

export const middleware = withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
    "/applications/:path*",
  ],
};
