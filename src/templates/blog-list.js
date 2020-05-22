import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`;

const BlogList = ({ data: { allMarkdownRemark: { edges } }, pageContext }) => {

  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Home" />
      <PostsList postsList={edges} />
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export default BlogList;
