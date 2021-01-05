import { GetServerSideProps, NextPage } from "next";
import Card from "../../components/Card";

interface Props {
  posts: {
    id: number;
    title: string;
    description: string;
  }[];
}

const Blog: NextPage<Props> = ({ posts }) => (
  <main>
    {posts.map((post) => (
      <Card key={post.id} post={post} />
    ))}
  </main>
);
export default Blog;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch("http://localhost:1337/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
