import { Header } from "@/components/specific/Header";
import React from "react";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
