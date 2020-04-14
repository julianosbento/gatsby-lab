import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import PostItem from './PostItem';

const PostsList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
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
  `);

  const postList = allMarkdownRemark.edges;

  const renderPosts = () => postList.map(
    ({
      node: {
        fields: { slug },
        frontmatter: { background, category, date, description, title },
        timeToRead,
      },
    }) => (
        <PostItem
          slug={slug}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      )
  );


  return renderPosts();
};

export default PostsList;
