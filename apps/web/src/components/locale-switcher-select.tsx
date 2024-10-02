"use client";

import { Button } from "@repo/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import { GB, NL } from "country-flag-icons/react/3x2";

import { useTransition } from "react";

import type { Locale } from "@/i18n/config";

import { setUserLocale } from "@/actions/locale";

type Props = {
  defaultValue: Locale;
  items: Array<{ value: Locale; label: string }>;
};

const flags = {
  nl: NL({ className: "w-5" }),
  en: GB({ className: "w-5" }),
} as const;

export const LocaleSwitcherSelect = ({ defaultValue, items }: Props) => {
  const [, startTransition] = useTransition();

  const handleChange = (value: string) => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2" variant="outline">
          {flags[defaultValue]}
          <span className="uppercase">{defaultValue}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            className="gap-2"
            onSelect={() => handleChange(item.value)}
          >
            {flags[item.value]}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
