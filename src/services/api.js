import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const createFormData = body => {
  const formData = new FormData();
  for (const key in body) {
    formData.append(key, body[key]);
  }
  return formData;
};

export default api;
