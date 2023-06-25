//全局基础配置
import axios from "axios";
//后面的请求用request发
let request = axios.create({
  //基础配置
  baseURL: "http//:localhost:8081/",
  timeout: 30 *1000,
  responseType: "json"

})
request.interceptors.request.use
