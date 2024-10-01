"use client";

import type { FC } from "react";
import { useTransition } from "react";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/i18n/config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/select";
import { cn } from "@repo/ui/utils";

export const LocaleSwitcher: FC = () => {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "w-[180px]",
          isPending && "pointer-events-none opacity-60",
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="nl">Dutch</SelectItem>
      </SelectContent>
    </Select>
  );
};
