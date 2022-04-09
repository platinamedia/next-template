import { NextPage } from "next";
import React from "react";

export type Page<T = {}> = NextPage & {
  title?: string;
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};
