import axios from "axios";

const instance = axios.create({ baseURL: "https://tinder-for-theater.herokuapp.com" });

export default instance;
