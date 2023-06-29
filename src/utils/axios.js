/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
//全局基础配置
import axios from "axios";
//配置中心
import webConfig from "@/utils/global.config.js"
//base64加密（不可逆）
import { Base64 } from "js-base64"
import router from "@/router";
//后面的请求用request发
let request = axios.create({
  //基础配置
  baseURL: "http//:localhost:8081/",
  timeout: 30 *1000,
  responseType: "json",
  headers: {
    "a":"123"
  }
})
request.interceptors.request.use((config) =>{
  //token,密钥设置
  let whteList = webConfig.whteListApi
  let url = config.url
  let token = localStorage.getItem("token");
  if(whteList.indexOf(url) ===-1 && token){
    config.headers.token = token;
  }
  //密钥(通过secretId+特殊算法防止请求攻击)
  let _secret = Base64.encode(webConfig.secretId + new Date().toString());
  config.headers.secret = _secret;
  return config;
},error => {
  return Promise.reject(new Error(error))
})
request.interceptors.response.use(()=>{
  //响应统一处理
  const status = res.data.code || 200
  const message = res.data.msg || "未知错误";
  if (status ===401){
    alert("你没有权限");
    router.push("/about")
  }
}, error => {
  //真实项目内往往使用组件库的消息提示（例如ElementUI的message，$waring）
  alert("error")
  return Promise.reject(new Error(error));
})
