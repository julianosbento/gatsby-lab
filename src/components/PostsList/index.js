import React from 'react';

import PostItem from './PostItem';

const PostsList = ({ postsList }) => {
  const renderPosts = () => postsList.map(
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
