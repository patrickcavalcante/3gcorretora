import { GetStaticProps, NextPage, GetStaticPaths } from "next";

import { PostDTO } from "../../src/dtos/PostDTO";

interface Props {
  post: PostDTO[];
}

const Article: NextPage<Props> = ({ post }) => (
  <>
    {post.map((artigo) => (
      <h1 key={artigo.id}>{artigo.title}</h1>
    ))}
  </>
);
export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const { API_URL } = process.env;
  const response = await fetch(`${API_URL}/posts`);
  const data = await response.json();

  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { slug } = context.params;
  const { API_URL } = process.env;
  const response = await fetch(`${API_URL}/posts/?slug=${slug}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
