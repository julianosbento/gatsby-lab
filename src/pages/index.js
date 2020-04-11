import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostsList from '../components/PostsList';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostsList />
  </Layout>
);

export default IndexPage;
