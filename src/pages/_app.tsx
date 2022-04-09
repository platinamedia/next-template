import { AppProps } from "next/app";
import { Page } from "@/types/Page";

import "../main.css";

type MyAppProps = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <div id="app">{getLayout(<Component {...pageProps} />)}</div>;
}

export default App;
