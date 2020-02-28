import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-maker-3bf67.firebaseio.com/"
});

export default instance;
