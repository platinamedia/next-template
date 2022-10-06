import Link from "next/link";

import { PrimaryLayout } from "@/layouts/PrimaryLayout";

import { Page } from "@/types/Page";

import styles from "./index.module.css";

const HomePage: Page = () => {
  return (
    <div>
      <h1 className={styles.title}>The Next.js template</h1>
      <Link href="https://github.com/tsivinsky/next-template" passHref>
        <a>GitHub</a>
      </Link>
    </div>
  );
};

HomePage.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export default HomePage;
