//利用Flux去修改数据
//第一步引入派遣者
import {Dispatcher} from 'flux'

//第二、实例化Dispatcher
let dispatcher = new Dispatcher()
// console.log(dispatcher,'dispatcher')
//第三、创建一个数据源 state
const state={
    msg:'最美不是下雨天'
}


//行动注册，派遣者注册行动
dispatcher.register((action)=>{
    //action 触发行动获取的参数
    // console.log(a,'？？？')
    //你可能有大量的行动，如何区分行动，可以利用条件判断
    switch (action.type) {
        case "changeMsg":
            state.msg = '是和你一起躲过的屋檐'
            console.log(state.msg,'bian')
            break;
    
        default:
            break;
    }
})

//四、 导出变量
export default {
    state,
    dispatcher
}