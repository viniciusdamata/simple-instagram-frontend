import api from "./api";

export const posts = {
  index() {
    return api.get("/posts");
  },
  store(post) {
    const formData = new FormData();
    for (const key in post) {
      formData.append(key, post[key]);
    }

    return api.post("/posts", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    });
  },
  like(postId) {
    return api.put(`/posts/${postId}/like`);
  },
};
