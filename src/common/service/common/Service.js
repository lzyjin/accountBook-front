import store from "@/store";
import axios from "axios";
import ConstantCode from "@/common/constants/ConstantCode";

class Service{
    constructor(){
        this.$axios = axios.create({
            headers:{
                Accept:"application/json", "Content-Type":"application/json"
            },
            withCredentials:true
        })
        this.$axios.interceptors.request.use((config)=>{
            const auth = store.getters['user/getAuthorization']
            const refresh = store.getters['user/getRefreshToken']
            config.headers['Authorization'] = auth
            config.headers[ConstantCode.REFRESH_TOKEN_NAME]= refresh
            return config
        })
        this.$axios.interceptors.response.use((response)=>{
            return response
        }
        //     (response)=>{
        //     return -1
        // }
        )
    }
    get(path ='', param={}){
        return this.$axios.request({
            method:"GET",
            url:path,
            params:param,
            responseType:"json"
        })
    }
    put(path,payload){
        return this.$axios.request({
            method:"PUT",
            url:path,
            responseType:"json",
            data:payload
        })
    }
    patch(path, payload){
        return this.$axios.request({
            method:"PATCH",
            url:path,
            responseType:"json",
            data:payload
        })
    }
    post(path,payload){
        console.log("path : "+path);
        return this.$axios.request({
            method:"post",
            url:path,
            responseType:"json",
            data:payload
        })
    }
    multipartPost(path,payload){
        return this.$axios.request({
            headers:{'Content-type':"multipart/form-data"},
            method:"post",
            url:path,
            responseType:'json',
            data:payload
        })
    }
    delete(path,payload){
        return this.$axios.request({
            method:'delete',
            url:path,
            responseType:'json',
            params:payload
        })
    }

    setToken(token="",refreshToken="", userData={}){
        store.commit('user/setAuthorization', {authorization:token, refreshToken:refreshToken})
        store.commit('user/setUserData', {userData:userData})
        localStorage.setItem("userData", JSON.stringify(userData))
        localStorage.setItem("accessToken", token)
        localStorage.setItem("refreshToken", refreshToken)
    }
    deleteToken(token = "", userData={}){
        store.commit('user/setAuthorization', {authorization:'', refreshToken:''})
        store.commit('user/setUserData', {userData:{}} )
        localStorage.removeItem("userData")
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
    }
}
export default Service
