'use client';
import { useEffect, useState } from 'react';
import { getAllPosts } from '@/services/getPosts';
import Posts from '../components/Posts';
import PostSearch from '../components/PostSearch';

export default function Blog() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h2>welcome to blog page</h2>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
