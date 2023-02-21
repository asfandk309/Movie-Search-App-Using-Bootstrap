import axios from "axios";
const instance = axios.create();
// instance.interceptors.request.use(
//   async (config) => {
//     // config.baseURL = "https://www.omdbapi.com/?apikey=c951ff1&";
//     config.timeout = 60000;
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export const BASE_URL = "https://www.omdbapi.com/?apikey=c951ff1&";

export default instance;
