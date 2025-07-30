import { redirect } from 'react-router'
import { AUTH_TOKEN } from '@/constants/constants.ts'
import { parseCookies } from '@/utils/parseCookies.ts'

export const redirectAuthLoader = (args: { request: Request }) => {
  const cookies =  parseCookies(args.request.headers.get('cookie'))
  const token = cookies[AUTH_TOKEN]
  if (token) {
    const searchUrl = new URL(args.request.url).search
    const searchParams = new URLSearchParams(searchUrl)
    const redirectTo = searchParams.get('redirect') || '/app'
    return redirect(`${redirectTo}`, 302)
  }
  return null
}