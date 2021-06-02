import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" }); // creating axios instance
// Something specific to each of our request is
// This is going to be an function to happen to each of our request
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`; // Its going to the auth.js middleware
  }
  return req;
}); // why this is ? bec we have to send token back to our backend middle ware to varify that we actually logged in

export const fetchPost = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) => API.post(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.post(`/posts/${id}/likePost`);
export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
