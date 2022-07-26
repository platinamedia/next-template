import { PrimaryLayout } from "@/layouts/PrimaryLayout";

import { Page } from "@/types/Page";

const AboutPage: Page = () => {
  return (
    <div>
      <h1>About us</h1>
    </div>
  );
};

AboutPage.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export default AboutPage;
