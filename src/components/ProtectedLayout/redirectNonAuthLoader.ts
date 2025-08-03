import { AUTH_TOKEN } from '@/constants/constants.ts'
import { LoaderFunctionArgs } from 'react-router-dom'
import { getCookie } from '@/utils/getCookie.ts'

export const redirectNonAuthLoader = (args: LoaderFunctionArgs) => {
  return getCookie(AUTH_TOKEN, args.request)
}
