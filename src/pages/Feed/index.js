import React from "react";

import "./Feed.css";

import Card from "../../components/card";

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
    <section className="post-list">
      {posts.map((post) => (
        <Card {...post} key={post.id}></Card>
      ))}
    </section>
  );
}
