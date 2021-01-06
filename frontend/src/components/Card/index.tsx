import { NextPage } from "next";
import Link from "next/link";
import { PostDTO } from "../../dtos/PostDTO";
import { CardStyled, CardBody } from "./style";

interface CardProps {
  post: PostDTO;
}

const Card: NextPage<CardProps> = ({ post }) => (
  <CardStyled>
    <Link href={`blog/${post.slug}`}>
      <CardBody>
        <h1>{post.title}</h1>
        {post.image.map((item) => (
          <img
            key={item.id}
            src={`${process.env.API_URL}${item.formats.thumbnail.url}`}
            alt={item.name}
          />
        ))}
        <p>{post.description}</p>
      </CardBody>
    </Link>
  </CardStyled>
);

export default Card;
