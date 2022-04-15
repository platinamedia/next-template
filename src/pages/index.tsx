import { MainLayout } from "@/layouts/MainLayout";
import { Page } from "@/types/Page";
import Link from "next/link";

const HomePage: Page = () => {
  return (
    <div>
      <h1>The Next.js template</h1>
      <Link href="https://github.com/tsivinsky/next-template" passHref>
        <a>GitHub</a>
      </Link>
    </div>
  );
};

HomePage.title = "Home";

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HomePage;
