import { MainLayout } from "@/layouts/MainLayout";

import { Page } from "@/types/Page";

const AboutPage: Page = () => {
  return (
    <div>
      <h1>About us</h1>
    </div>
  );
};

AboutPage.title = "About";

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default AboutPage;
