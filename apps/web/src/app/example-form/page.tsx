import type { FC } from "react";
import { FormComponent } from "./components/form-component";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { getTranslations } from "next-intl/server";

const FormPage: FC = async () => {
  const t = await getTranslations("example-form.page");
  return (
    <div className="flex-1 grid place-items-center">
      <Card className="w-full max-w-screen-sm">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <FormComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default FormPage;
