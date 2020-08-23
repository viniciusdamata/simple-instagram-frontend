/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";

import comment from "../../assets/comment.svg";
import like from "../../assets/like.svg";
import more from "../../assets/more.svg";
import profilePicture from "../../assets/profile-picture.png";
import send from "../../assets/send.svg";

import {
  CardComponent,
  CardFooter,
  CardHeader,
  Col,
  Hashtag,
  Icon,
  Row,
} from "./styles";

import {asyncLikePost} from "../../store/posts/actions"

export default function Card({
  author,
  place,
  description,
  hashtags,
  image,
  likes,
  _id,
}) {
  const dispatch = useDispatch();

  const handleLike = postId => {
    dispatch(asyncLikePost(postId));
  };

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
        <Icon src={like} onClick={() => handleLike(_id)} alt="like" />
        <Icon src={comment} alt="comment" />
        <Icon src={send} alt="send" />
        <Col>
          <Hashtag>{hashtags}</Hashtag>
        </Col>
        <div>
          <strong>{likes} Curtidas</strong>
          <p>{description}</p>
        </div>
      </CardFooter>
    </CardComponent>
  );
}
