import React from "react";


import Card from "../../components/card";
import { PostList } from "./styles";

import img from "../../assets/img.jpg";

const posts = [
  {
    id: 1,
    author: "Teste",
    place: "teste",
    description: "teste",
    hashtags: "teste",
    image: img,
    likes: 100,
  },

  {
    id: 2,
    author: "Teste",
    place: "teste",
    description: "teste",
    hashtags: "teste",
    image: img,
    likes: 100,
  },
  {
    id: 3,
    author: "Teste",
    place: "teste",
    description: "teste",
    hashtags: "teste",
    image: img,
    likes: 100,
  },
];

export default function Feed() {
  return (
    <PostList>
      {posts.map((post) => (
        <Card {...post} key={post.id}></Card>
      ))}
    </PostList>
  );
}
