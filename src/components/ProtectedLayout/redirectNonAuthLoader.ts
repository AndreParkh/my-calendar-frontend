import { redirect } from 'react-router'
import { AUTH_TOKEN } from '@/constants/constants.ts'
import { parseCookies } from '@/utils/parseCookies.ts'

export const redirectNonAuthLoader = (args: { request: Request }) => {
  const cookies = parseCookies(args.request.headers.get('cookie'))
  const token = cookies[AUTH_TOKEN]
  if (!token) {
    const location = new URL(args.request.url).pathname
    return redirect(`/auth/login?redirect=${encodeURIComponent(location)}`, 302)
  }
  return null
}