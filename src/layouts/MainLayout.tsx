import React from "react";

import { Header } from "@/components/specific/Header";

export const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
