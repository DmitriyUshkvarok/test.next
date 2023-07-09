async function getData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}

export async function generateMetadata({ params: { id } }) {
  const post = await getData(id);
  return { title: post.title };
}

export default async function Post({ params: { id } }) {
  const post = await getData(id);
  return (
    <>
      <h3>Post Page {post.title}</h3>
      <p>{post.body}</p>
    </>
  );
}
