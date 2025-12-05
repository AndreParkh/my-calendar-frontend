import { test, expect } from '@playwright/test'

test('login', async ({ page }) => {
  await page.goto('/pr/auth/login')
  const email = page.getByLabel('Адрес электронной почты')
  const password = page.getByLabel('Пароль')
  const button = page.locator('form').getByRole('button', { name: 'Войти' })

  await email.fill(process.env.TEST_USER_EMAIL || '')
  await password.fill(process.env.TEST_USER_PASSWORD || '')
  await button.click()

  await page.waitForURL('/pr/dashboard')
  await expect(page.getByRole('button', { name: 'Выйти' })).toBeVisible()
})

test('yandex OAuth', async ({ page }) => {
  const mockAuthToken = 'mocked-jwt-token'
  const cookieName = 'authToken'
  const cookiePath = '/'
  const redirectUrl = `${process.env.FRONTEND_ORIGIN}/dashboard`

  const setCookieHeader = `${cookieName}=${mockAuthToken}; Path=${cookiePath}`
  await page.route('**/api/auth/yandex/callback**', async (route) => {
    await route.fulfill({
      status: 302,
      headers: {
        'Set-Cookie': setCookieHeader,
        Location: redirectUrl,
      },
    })
  })

  await page.goto('/auth/login')

  await page.getByRole('button', { name: 'Войти с помощью Яндекс ID' }).click()
  await page.waitForURL('https://passport.yandex.ru/**')
  const url = page.url()

  expect(url).toContain('passport.yandex.ru')
  expect(url).toContain('oauth.yandex.ru%2Fauthorize')
  const mockedCode = 'mocked-oauth-code-for-testing'

  await page.goto(
    `${process.env.VITE_API_DOMAIN}/api/auth/yandex/callback?code=${mockedCode}`,
  )

  await page.waitForURL('/dashboard')
})
