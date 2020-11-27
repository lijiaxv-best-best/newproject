import http from './axios'
//菜单
export  function setlist(data){
    return http.post('/api/menuadd',data)
}
export  function getlist(params){
    return http.get('/api/menulist',{params})
}

export function getone(params){
    return http.get('/api/menuinfo',{params})
}

export function changemenu(data){
    return http.post('/api/menuedit',data)
}


export function delmenu(data){
    return http.post('/api/menudelete',data)
}


//角色管理

export function roleadd(data){
return http.post('/api/roleadd',data)
}

export function rolelist(params){
    return http.get('/api/rolelist',{params})
}

export function roleinfo(params){
    return http.get('/api/roleinfo',{params})
}
export function roleedit(data){
    return http.post('/api/roleedit',data)
}

export function roledelete(data){
    return http.post('/api/roledelete',data)
}


//管理员
export function useradd(data){
    return http.post('/api/useradd',data)
}

export function usercount(){
    return http.get('/api/usercount')
}

export function userlist(params){
    return http.get('api/userlist',{params})
}
export function userinfo(params){
    return http.get('/api/userinfo',{params})
}

export function useredit(data){
    return http.post('/api/useredit',data)
}

export function userdelete(data){
    return http.post('/api/userdelete',data)
}

export function userlogin(data){
  
    return http.post('/api/userlogin',data)
}


//商品分类
export function cateadd(data){
    return http.post('api/cateadd',data)
}

export function catelist(params){
    return http.get('/api/catelist',{params})
}

export function cateinfo(params){
    return http.get('/api/cateinfo',{params})
}

export function cateedit(data){
    return http.post('/api/cateedit',data)
}

export function catedelete(data){
    return http.post('/api/catedelete',data)
}

//商品规格
export function specsadd(data){
    return http.post('/api/specsadd',data)
}

export function specscount(params){
    return http.get('/api/specscount',{params})
}

export function specslist(params){
    return http.get('/api/specslist',{params})
}

export function specsinfo(params){
    return http.get('/api/specsinfo',{params})
}

export function specsedit(data){
    return http.post('/api/specsedit',data)
}

export function specsdelete(data){
    return http.post('/api/specsdelete',data)
}


//轮播图
export function banneradd(data){
    return http.post('/api/banneradd',data)
}

export function bannerlist(params){
    return http.get('/api/bannerlist',{params})
}

export function bannerinfo(params){
    return http.get('/api/bannerinfo',{params})
}

export function banneredit(data){
    return http.post('/api/banneredit',data)
}

export function bannerdelete(data){
    return http.post('/api/bannerdelete',data)
}

//会员管理

export function memberlist(params){
    return http.get('/api/memberlist',{params})
}
export function memberinfo(params){
    return http.get('/api/memberinfo',{params})
}
export function memberedit(data){
    return http.post('/api/memberedit',data)
}

//商品添加
export function goodsadd(data){
    return http.post('/api/goodsadd',data)
}

export function goodscount(params){
    return http.get('/api/goodscount',{params})
}

export function goodslist(params){
    return http.get('/api/goodslist',{params})
}

export function goodsinfo(params){
    return http.get('/api/goodsinfo',{params})
}

export function goodsedit(data){
    return http.post('/api/goodsedit',data)
}

export function goodsdelete(data){
    return http.post('/api/goodsdelete',data)
}


//限时秒杀管理
export function seckadd(data){
    return http.post('/api/seckadd',data)
}

export function secklist(params){
    return http.get('/api/secklist',{params})
}

export function seckinfo(params){
    return http.get('/api/seckinfo',{params})
}


export function seckedit(data){
    return http.post('/api/seckedit',data)
}

export function seckdelete(data){
    return http.post('/api/seckdelete',data)
}


export function getSeckAdd(data){
    return http.post('/api/seckadd',data)
}
//封装限时秒杀列表接口
export function getSeckList(){
    return http.get('/api/secklist')
}
//封装限时秒杀获取（一条）接口
export function getSeckInfo(params){
    return http.get('/api/seckinfo',{
        params
    })
}
//封装限时秒杀修改接口
export function getSeckEdit(data){
    return http.post('/api/seckedit',data)
}
//封装限时秒杀删除接口
export function getSeckDelete(data){
    return http.post('/api/seckdelete',data)
}
