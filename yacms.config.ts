import { defineConfig } from "@yacms/core/config";

export default defineConfig({
  plugins: {
    ga4: {
      trackingId: "G-CKH4RH98D2",
    },
    tawk: {
      widgetId: "69bc038b22e4791c3681a8c2/1jk36rmup",
      source: "autem.ch",
    },
    klaro: {
      privacyPolicyPath: "/mentions-legales",
    },
  },
  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', label: 'Français' },
      { code: 'de', label: 'Deutsch' },
    ],
    routing: 'prefix-except-default',
    fallback: 'default',
    translation: {
      adapter: 'gemini',
      model: 'gemma-4-31b-it',
    },
  },
});
