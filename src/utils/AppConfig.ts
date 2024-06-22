import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Restos',
  locales: ['en', 'ko'],
  defaultLocale: 'en',
  localePrefix,
};
