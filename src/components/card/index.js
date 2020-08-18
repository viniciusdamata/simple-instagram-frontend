import React from "react";

import more from "../../assets/more.svg";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";
import like from "../../assets/like.svg";
import profilePicture from "../../assets/profile-picture.png";

// import "./Card.css";

import {
  CardComponent,
  CardHeader,
  Col,
  Row,
  CardFooter,
  Icon,
} from "./styles";

export default function Card({
  author,
  place,
  description,
  hashtags,
  image,
  likes,
}) {
  return (
    <CardComponent>
      <CardHeader>
        <Row>
          <Icon src={profilePicture} alt="profile" />
          <Col>
            <span>{author}</span>
            <strong className="place">{place}</strong>
          </Col>
        </Row>
        <img src={more} alt="mais" />
      </CardHeader>

      <img className="post" src={image} alt="img" />

      <CardFooter>
        <Icon src={like} onClick={() => console.log("deu like")} alt="like" />
        <Icon src={comment} alt="comment" />
        <Icon src={send} alt="send" />

        <div>
          <strong>{likes} Curtidas</strong>
          <p>Um post massa da omnistack</p>
        </div>
      </CardFooter>
    </CardComponent>
  );
}
