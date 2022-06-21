import axios from "axios";
import { changeLoader } from "../store/actions/loader";
import store from "../store/store";
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});


axiosInstance.interceptors.request.use(
  function (config) {
  
    store.dispatch(changeLoader(true));
    
    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    
    store.dispatch(changeLoader(false));
    return response;
  },
  function (error) {

    return Promise.reject(error);
  }
);

export default axiosInstance;
