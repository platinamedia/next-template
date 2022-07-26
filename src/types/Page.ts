import React from "react";

import { NextPage } from "next";

export type Page<PageProps = {}> = NextPage<PageProps> & {
  title?: string;
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};
