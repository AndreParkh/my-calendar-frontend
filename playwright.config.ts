import { defineConfig, devices } from '@playwright/test'

import * as dotenv from 'dotenv'
import * as dotenvExpand from 'dotenv-expand'

const envConfig = dotenv.config({ path: ['.env', `.env.production`] })
dotenvExpand.expand(envConfig)

const frontendOrigin = process.env.FRONTEND_ORIGIN

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: `${frontendOrigin}`,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
