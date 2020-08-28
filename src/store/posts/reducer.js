const INITIAL_STATE = {
  posts: [],
  isLoaded: false,
  error: null,
  loadingSubmit: false,
};

function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload,
        isLoaded: true,
        error: null,
      };

    case "STORE_POST_LOADING":
      return {
        ...state,
        loadingSubmit: true,
      };

    case "STORE_POST_LOADING_END":
      return {
        ...state,
        loadingSubmit: false,
      };

    case "STORE_POST":
      //Make request for creating the post
      return {
        ...state,
        posts: [...state.posts, action.payload],
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
