import axios from "axios";
import { env } from "process";

const api = axios.create({
  baseURL: env.NEXT_PUBLIC_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return config;
});

export default api;
