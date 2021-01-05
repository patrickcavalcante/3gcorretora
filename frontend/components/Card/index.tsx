import { NextPage } from "next";
import { CardStyled, CardBody } from "./style";

interface CardProps {
  post: {
    title: string;
    description: string;
  };
}

const Card: NextPage<CardProps> = ({ post }) => (
  <CardStyled>
    <CardBody>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </CardBody>
  </CardStyled>
);

export default Card;
