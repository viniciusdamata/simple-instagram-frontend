export function fetchPosts(data) {
  return { type: "FETCH_POSTS", payload: data };
}

export function storePost(data) {
    return { type: "STORE_POST", payload: data };
}

export function likePost(postId) {
    return { type: "LIKE_POST", payload: postId };
  }
  
  
  
  