import React from 'react';
import Head from 'next/head';
import Base from '../layouts/base';

const TITLE = 'Home';

export default () => (
  <React.Fragment>
    <Head>
      <title>{TITLE}</title>
    </Head>

    <Base>
      <h1>{TITLE}</h1>
    </Base>
  </React.Fragment>
)
