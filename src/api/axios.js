import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "713e3ad20466606800bd3464ca5d4a4e",
    language: "ko-KR",
  },
});

export default instance;
