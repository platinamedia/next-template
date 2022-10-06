import Link from "next/link";

import { PrimaryLayout } from "@/layouts/PrimaryLayout";

import { Page } from "@/types/Page";

import styles from "./index.module.css";

const AboutPage: Page = () => {
  return (
    <div>
      <h1 className={styles.title}>About Page</h1>

      <div>
        <Link href="/">back to home</Link>
      </div>
    </div>
  );
};

AboutPage.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export default AboutPage;
