import React from "react";
import { Navlink } from "../Navlink";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex justify-between px-5 py-4">
      <h1 className="text-xl">My App</h1>
      <nav className="flex gap-x-4 text-lg">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/about">About</Navlink>
      </nav>
    </header>
  );
};
