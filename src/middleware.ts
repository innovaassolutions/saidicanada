import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/videos') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') // static files like favicon.ico
  ) {
    return;
  }

  // Redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|videos|images|.*\\..*).*)'],
};
