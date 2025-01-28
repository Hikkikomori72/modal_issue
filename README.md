When attempting to render any modal window at the same level as the Stack, it results in incorrect positioning.
<img width="356" alt="Screenshot 2025-01-28 at 13 32 06" src="https://github.com/user-attachments/assets/a42af1d6-0ffa-49f5-b1ea-3faf4fb58edc" />

In our case, we cannot avoid this issue since we cannot control the rendering position of built-in dialog windows like alert, confirm, and prompt, unlike writing our own modals.
The problem only occurs on Android.

Startup version: "@startupjs/ui": "^0.59.0-canary.11"

Expo version: "expo": "~52.0.28"

## Get started

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the app
   ```bash
    npx expo start
   ```

