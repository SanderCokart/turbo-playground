import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "../services/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: {
      ...(await import(`../../messages/${locale}.json`)).default,
      ...(await import(`../../messages/zod/${locale}.json`)).default,
    },
  };
});
