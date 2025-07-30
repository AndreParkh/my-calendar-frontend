export const parseCookies = (
  cookiesString: string | undefined | null,
): Record<string, string> => {
  if (!cookiesString) return {}

  const cookies: Record<string, string> = {}

  cookiesString.split(';').forEach((cookie) => {
    const [name, value] = cookie.trim().split('=')
    if (name && value) {
      cookies[decodeURIComponent(name)] = decodeURIComponent(value)
    }
  })

  return cookies
}
