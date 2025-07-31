const emptyCookies: Record<string, string> = {}

export const parseCookies = (
  cookiesString: string | undefined | null,
): Record<string, string> => {
  if (!cookiesString) return emptyCookies

  return cookiesString.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.trim().split('=')
    acc[decodeURIComponent(name)] = decodeURIComponent(value)
    return acc
  }, emptyCookies)
}
