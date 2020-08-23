export function fetchPosts(data) {
  return { type: "FETCH_POSTS", payload: data };
}

export function storePost(data) {
  return { type: "STORE_POST", payload: data };
}

export function storePostLoading() {
  return { type: "STORE_POST_LOADING" };
}

export function storePostLoadingEnd(data) {
  return { type: "STORE_POST_LOADING_END" };
}

export function likePost(postId) {
  return { type: "LIKE_POST", payload: postId };
}


//Saga Actions
export function asyncFetchPosts(data) {
  return { type: "ASYNC_FETCH_POSTS", payload: data };
}

export function asyncStorePost(data) {
  return { type: "ASYNC_STORE_POST", payload: data };
}

export function asyncLikePost(postId) {
  return { type: "ASYNC_LIKE_POST", payload: postId };
}
