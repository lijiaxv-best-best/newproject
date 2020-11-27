import axios from 'axios'
import router from '../../router'

const http = axios.create({
    baseURL:'/api'
})
// http.interceptors.request.use(req=>{
//     console.log(req,'请求');
//     return req
// })



http.interceptors.request.use(req => {

  let userinfo = sessionStorage.getItem("userinfo")
    ? JSON.parse(sessionStorage.getItem("userinfo"))
    : {};

 
  req.headers.authorization = userinfo.token;
 
  return req;
});

http.interceptors.response.use(res => {
 
  
  if (res.data.code == 403) {
    alert(res.data.msg);
  
    router.push("/login");
    return res;
  } else if (res.data.code == 500) {
    alert(res.data.msg);
    
    router.push("/login");
    return res;
  }else{
      return res
  }
});


export default http