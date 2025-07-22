import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 10000,
  withCredentials: true,
});

// Add request interceptor to include auth token if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
