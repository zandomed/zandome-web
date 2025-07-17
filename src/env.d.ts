import 'astro/astro-jsx';

interface ImportMetaEnv {
  readonly ANALYTICS_GOOGLE_ID: string;
  readonly PHONE_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  namespace JSX {
    // type Element = astroHTML.JSX.Element; // We want to use this, but it is defined as any.
    type Element = HTMLElement;
  }
}

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    // eslint-disable-next-line no-unused-vars
    gtag: (...args: any[]) => void;
  }
}
