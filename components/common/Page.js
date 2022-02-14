import { Head, Layout } from './';

const Page = ({ children }) => (
  <>
    <Head />
    <Layout>{children}</Layout>
  </>
);

export { Page };
