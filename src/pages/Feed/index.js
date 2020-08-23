import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/Card";
import { PostList, LoadingPosts } from "./styles";

import { asyncFetchPosts } from "../../store/posts/actions";

export default function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const isLoaded = useSelector(state => state.posts.isLoaded);

  const fetchPosts = dispatch => {
    dispatch(asyncFetchPosts());
  };

  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);

  if (isLoaded) {
    return (
      <PostList>
        {posts.map(post => (
          <Card {...post} key={post._id}></Card>
        ))}
      </PostList>
    );
  } else {
    return <LoadingPosts>Loading...</LoadingPosts>;
  }
}
