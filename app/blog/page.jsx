import Link from 'next/link';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  return response.json();
}

const Blog = async () => {
  const posts = await getData();
  return (
    <>
      <h2>welcome to blog page</h2>
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

export default Blog;
