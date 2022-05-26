import React from 'react';
import { BlogPosts } from '../components/blog';
import { BlogHero } from '../components/blog/Hero';

const Blog = () => (
  <div>
    <BlogHero />
    <BlogPosts />
  </div>
);

export { Blog };
