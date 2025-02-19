import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const maintenancePath = '/maintenance';

  // Allow access to the maintenance page itself
  if (req.nextUrl.pathname.startsWith(maintenancePath)) {
    return NextResponse.next();
  }

  // Allow styles, scripts, images, fonts, and static assets
  const allowedPaths = [
    '/_next', // Next.js internals (styles, scripts, chunks)
    '/favicon.ico', // Favicon
    '/icons', // Custom icons (if used)
    '/images', // Image assets
    '/public', // Public assets
  ];

  if (allowedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Redirect all other routes to the maintenance page
  return NextResponse.redirect(new URL(maintenancePath, req.url));
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};
