import { useLocale } from "next-intl";

import type { Locale } from "@/i18n/config";

import { LocaleSwitcherSelect } from "./locale-switcher-select";

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: "English",
        },
        {
          value: "nl",
          label: "Nederlands",
        },
      ]}
    />
  );
}
