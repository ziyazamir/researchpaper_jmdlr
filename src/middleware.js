import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log('hello about');
    const adminAuth = request.cookies.get('adminSaved')?.value;
    console.log(adminAuth);
    if (adminAuth !== "true") {
        return NextResponse.redirect(new URL('/myadmin', request.url));
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/admin/:path*',
}