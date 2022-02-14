import Head from 'next/head';

const HeadContainer = () => (
  <Head>
    <title>{'Crasman Vehicles'}</title>
    <meta name={'description'} content={'Simple listing of vehicles'} />
    <link rel={'icon'} href={'/favicon.svg'} />
  </Head>
);

export { HeadContainer as Head };
