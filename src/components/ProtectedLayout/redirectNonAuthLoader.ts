import { redirect } from 'react-router'
import { AUTH_TOKEN } from '@/constants/constants.ts'
import { parseCookies } from '@/utils/parseCookies.ts'
import { LoaderFunctionArgs } from 'react-router-dom'

export const redirectNonAuthLoader = (args: LoaderFunctionArgs) => {
  const cookies = parseCookies(args.request.headers.get('cookie'))
  const token = cookies[AUTH_TOKEN]
  if (!token) {
    const location = new URL(args.request.url).pathname
    return redirect(`/auth/login?redirect=${encodeURIComponent(location)}`)
  }
  return null
}
