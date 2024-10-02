import { FC, ReactNode } from "react";
import { ClientProviders } from "@/app/providers/client-providers";
import { ServerProviders } from "@/app/providers/server-providers";

export const GlobalProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ServerProviders>
      <ClientProviders>{children}</ClientProviders>
    </ServerProviders>
  );
};
