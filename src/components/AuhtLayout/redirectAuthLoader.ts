import { AUTH_TOKEN } from '@/constants/constants.ts'
import { LoaderFunctionArgs } from 'react-router-dom'
import { getCookie } from '@/utils/getCookie.ts'

export const redirectAuthLoader = (args: LoaderFunctionArgs) => {
  const searchUrl = new URL(args.request.url).search
  const searchParams = new URLSearchParams(searchUrl)
  const redirectTo = searchParams.get('redirect') || '/app'

  const token = getCookie(AUTH_TOKEN, args.request)

  return { token, redirectTo }
}
