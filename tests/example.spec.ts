import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto(process.env.TEST_APP_URL!);

  const heading = page.getByRole("heading")
  await expect(heading).toHaveText(/Contact Us/);
});
