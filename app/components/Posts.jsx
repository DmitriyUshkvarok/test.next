import Link from 'next/link';

const Posts = ({ posts }) => {
  return (
    <>
      <ul>
        {posts.map((el) => (
          <li key={el.id}>
            <Link href={`/blog/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
