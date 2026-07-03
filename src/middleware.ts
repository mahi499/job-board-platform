import { type NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return new Response(null, {
      status: 307,
      headers: {
        location: '/auth/signin',
      },
    })
  }

  return null
}

export const config = {
  matcher: ['/dashboard/:path*', '/employer/:path*', '/admin/:path*'],
}
