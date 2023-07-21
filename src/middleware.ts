import { authMiddleware } from "@clerk/nextjs/server";

// Set the paths that don't require the user to be signed in
const publicRoutes = ["/", "/api(.*)", "/proxy(.*)"];

export default authMiddleware({ publicRoutes });

// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
