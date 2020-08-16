import React from "react";

import more from "../../assets/more.svg";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";
import like from "../../assets/like.svg";
import profilePicture from "../../assets/profile-picture.png";

import "./Card.css";


export default function Card({
  author,
  place,
  description,
  hashtags,
  image,
  likes,
}) {
  return (
    <article>
      <header className="post-header">
        <div className="user-info">
          <img src={profilePicture} alt="" srcset="" />
          <span>{author}</span>
          <span className="place">{place}</span>
        </div>
        <img src={more} alt="mais" />
      </header>

      <img className="post" src={image} alt="img" />

      <footer>
        <div className="actions">
          <img src={like} alt="like" />
          <img src={comment} alt="comment" />
          <img src={send} alt="send" />
        </div>
        <div className="likes-comments">
          <strong>{likes} Curtidas</strong>
          <p>Um post massa da omnistack</p>
        </div>
      </footer>
    </article>
  );
}
