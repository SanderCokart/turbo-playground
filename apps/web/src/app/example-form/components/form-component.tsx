"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { useTranslations } from "next-intl";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export const FormComponent: FC = () => {
  const t = useTranslations("example-form.form-component");
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState, formState }) => (
            <FormItem>
              <FormLabel>{t("name.label")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>{t("name.description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState, formState }) => (
            <FormItem>
              <FormLabel>{t("email.label")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>{t("email.description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t("submit")}</Button>
      </form>
    </Form>
  );
};
