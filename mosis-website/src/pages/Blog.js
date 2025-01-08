import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Welcome to MOSIS Blog',
      date: 'January 7, 2025',
      excerpt: 'Example post, example post example post example post example post example post.',
    },
    {
      id: 2,
      title: 'This is the second post',
      date: 'January 8, 2025',
      excerpt: 'Example post, example post example post example post example post example post; example post example post example post example post example post.',
    },
    {
      id: 3,
      title: 'The third post!!!',
      date: 'April 32, 2025',
      excerpt: 'Hey',
    },
  ];

  return (
    <div className="blog">
      <h1>Our Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
