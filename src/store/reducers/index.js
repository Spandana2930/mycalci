import {ALL_STATES} from "../type/index"
const initialState ={
    
}
const  reducer=(state = initialState,action)=>{
    switch(action.type){
        case ALL_STATES:
            return{
                state:action.payload
               
            }
            

            default:
                return state
    }
}
export default reducer;