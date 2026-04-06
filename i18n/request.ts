import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {getTranslations} from '../lib/spanner';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Fetch from Spanner
  const spannerMessages = await getTranslations(locale);

  if (spannerMessages) {
    return {
      locale,
      messages: spannerMessages
    };
  }

  // Fallback to local files if Spanner is unreachable or empty
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
