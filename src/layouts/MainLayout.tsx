import { Header } from "@/components/specific/Header";
import React from "react";

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
