import React from 'react';
import { Container, Grid } from '@mantine/core';
import { posts } from '../../utils/blogContent';
import { BlogCard } from './Card';

const BlogPosts = () => {
  const allPosts = posts.map((item) => (
    <Grid.Col sm={8} lg={3}>
      <BlogCard
        image={item.image}
        category={item.category}
        title={item.title}
        footer={item.footer}
        author={item.author}
      />
    </Grid.Col>
  ));

  return (
    <div>
      <Container size="xl" my={80}>
        <Grid gutter={25}>
          {allPosts}
        </Grid>
      </Container>
    </div>
  );
};

export { BlogPosts };
