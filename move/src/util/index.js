import http from './axios'

export function getbanner(){
    return http.get('/api/getbanner')
}

export function getindexgoods(){
    return http.get('/api/getindexgoods')
}

export function getcatetree(){
    return http.get('/api/getcatetree')
}

export function getgoods(params){
    return http.get('/api/getgoods',{params})
}

export function getgoodsinfo(params){
    return http.get('/api/getgoodsinfo',{params})
}

export function cartadd(data){
    return http.post('/api/cartadd',data)
}

export function register(data){
    return http.post('/api/register',data)
}

export function login(data){
    return http.post('/api/login',data)
}

export function cartlist(params){
    return http.get('/api/cartlist',{params})
}

export function cartdelete(data){
    return http.post('/api/cartdelete',data)
}

