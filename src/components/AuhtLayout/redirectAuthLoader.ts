import { redirect } from 'react-router'
import { AUTH_TOKEN } from '@/constants/constants.ts'
import { parseCookies } from '@/utils/parseCookies.ts'
import { LoaderFunctionArgs } from 'react-router-dom'

export const redirectAuthLoader = (args: LoaderFunctionArgs) => {
  const cookies = parseCookies(args.request.headers.get('cookie'))
  const token = cookies[AUTH_TOKEN]
  if (token) {
    const searchUrl = new URL(args.request.url).search
    const searchParams = new URLSearchParams(searchUrl)
    const redirectTo = searchParams.get('redirect') || '/app'
    return redirect(redirectTo)
  }
  return null
}
