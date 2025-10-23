# Launch Your Playwright Codespace

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Platform-OS/cdsp-test)

## Important

Fork this repository to your **personal account** first. Running a Codespace on your fork uses your **free** personal quota (not the organization’s billing).

## Steps

1. Log in to GitHub.
2. Fork the repository: https://github.com/Platform-OS/cdsp-test (click **Fork** and choose your personal account).
3. Open your Codespaces dashboard: https://github.com/codespaces
4. Click **New codespace**.
5. Under **Repository**, select your fork: `your-account/cdsp-test`.
6. Leave other settings as default (branch `main`, machine 2-core / 8 GB RAM / 32 GB disk).
7. Click **Create codespace** and wait a few minutes for it to build. VS Code (web) will open when ready.
8. In the VS Code terminal, run the following command:

   ```bash
   npm run test
   ```

   This runs a simple Playwright test against the preconfigured test app URL.

9. If the test passes, your Codespace is ready for the workshop.

## After the workshop

Go to https://github.com/codespaces, find your Codespace, and click **Stop** or **Delete** to avoid consuming your free quota.
