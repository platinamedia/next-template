import React from "react";

import { NextPage } from "next";

export type Page<T = {}> = NextPage & {
  title?: string;
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};
