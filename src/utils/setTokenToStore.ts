import type * as express from 'express'
import { AUTH_TOKEN } from '@/constants/constants.ts'
import { store } from '@/entry.server.tsx'
import { setToken } from '@/store/reducers/authSlice.ts'
import { parseCookies } from '@/utils/parseCookies.ts'

export const setTokenToStore = (req: express.Request) => {
  const cookies = parseCookies(req.headers.cookie)
  const token = cookies[AUTH_TOKEN] || null
  store.dispatch(setToken(token))
}
