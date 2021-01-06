import { GetServerSideProps, NextPage } from "next";
import { Band } from "./styles";
import Card from "../../src/components/Card";

import { PostDTO } from "../../src/dtos/PostDTO";

interface Props {
  posts: PostDTO[];
}

const Blog: NextPage<Props> = ({ posts }) => (
  <Band>
    {posts.map((post) => (
      <Card key={post.id} post={post} />
    ))}
  </Band>
);
export default Blog;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { API_URL } = process.env;
  const response = await fetch(`${API_URL}/posts`);
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
