import { HIDE_ALERT, SHOW_ALERT } from "../type"

const handler = {
    [SHOW_ALERT]:(state,{payload})=>({
        ...payload,
        visible:true
    }),
    [HIDE_ALERT]:(state)=>({...state,visible:false}),
    default:state=>state
}



export default (state,action) => {
    const handle = handler[action.type] || handler.default
    return handle(state,action)
}
