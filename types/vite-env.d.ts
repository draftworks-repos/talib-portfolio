/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  // Add more VITE_ variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
