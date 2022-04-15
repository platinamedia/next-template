import React from "react";

import { Navlink } from "../Navlink";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <Navlink href="/">Home</Navlink>
        <Navlink href="/about">About</Navlink>
      </nav>
    </header>
  );
};
