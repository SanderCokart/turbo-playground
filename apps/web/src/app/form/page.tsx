import type { FC } from "react";
import { FormComponent } from "./components/form-component";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

const FormPage: FC = () => {
  return (
    <div className="flex-1 grid place-items-center">
      <Card className="w-full max-w-screen-sm">
        <CardHeader>
          <CardTitle>Form Page</CardTitle>
        </CardHeader>
        <CardContent>
          <FormComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default FormPage;
