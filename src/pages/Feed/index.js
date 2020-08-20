import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import { PostList } from "./styles";

export default function Feed() {
  const posts = useSelector(state => state.posts);

  return (
    <PostList>
      {posts.map(post => (
        <Card {...post} key={post.id}></Card>
      ))}
    </PostList>
  );
}
