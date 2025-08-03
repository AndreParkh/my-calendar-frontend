import Cookies from 'js-cookie'
import { parseCookies } from '@/utils/parseCookies.ts'

export const getCookie = (name: string, req?: Request) => {
  if (req && req.headers.get('cookie')) {
    const cookies = parseCookies(req.headers.get('cookie'))
    return cookies[name]
  }
  return Cookies.get(name)
}
