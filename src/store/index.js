import { createStore } from "redux";
import img from "../assets/img.jpg";

const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      author: "Teste",
      place: "teste",
      description: "teste",
      hashtags: "#teste #teste",
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      //Make the api call to list all posts
      break;
    case "CREATE_POST":
      //Make request for creating the post
      return {
        ...state,
        posts: [...state.posts, action.payload.newPost]
      }

    case "LIKE_POST":
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.postId ? { ...post, likes: parseInt(post.likes + 1) } : post
        ),
      };

    default: {
      return state;
    }
  }
}

const store = createStore(reducer, INITIAL_STATE);

export default store;