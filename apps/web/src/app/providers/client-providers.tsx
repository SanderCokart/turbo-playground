"use client";

import { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";
import { makeZodI18nMap } from "@/app/utils/zod-error-map";
import { z } from "zod";

export const ClientProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const t = useTranslations("zod");
  const tForm = useTranslations("form");
  const tCustom = useTranslations("customErrors");
  z.setErrorMap(makeZodI18nMap({ t, tForm, tCustom }));

  return <>{children}</>;
};
