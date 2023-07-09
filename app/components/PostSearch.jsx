'use client';

import { getPostsBySearch } from '@/services/getPosts';
import { useState } from 'react';

const PostSearch = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const posts = await getPostsBySearch(search).then();
    onSearch(posts);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
