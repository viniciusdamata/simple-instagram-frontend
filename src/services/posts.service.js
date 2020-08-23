import api, { createFormData } from "./api";

export const posts = {
  index() {
    return api.get("/posts");
  },
  store(post) {
    const formData = createFormData(post);
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
