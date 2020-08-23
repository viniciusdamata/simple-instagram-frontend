const INITIAL_STATE = {
  posts: [],
  isLoaded: false,
  error: null,
};

function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      console.log("posts -> action", action)
      return {
        ...state,
        posts: action.payload,
        isLoaded: true,
        error: null,
      };
    case "STORE_POST":
      //Make request for creating the post
      return {
        ...state,
        posts: [...state.posts, action.payload.data],
      };

    case "LIKE_POST":
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.postId
            ? { ...post, likes: parseInt(post.likes + 1) }
            : post
        ),
      };

    default: {
      return state;
    }
  }
}

export default posts;
