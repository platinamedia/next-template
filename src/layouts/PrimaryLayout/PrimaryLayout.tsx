import React from "react";

import { Header } from "@/components/common/Header";

export type PrimaryLayoutProps = {
  children?: React.ReactNode;
};

export const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
