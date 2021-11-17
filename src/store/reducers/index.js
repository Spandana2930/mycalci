import UPPER_DISPLAY from "../type/index"
const initialState ={
    upperDisplayData:[]
}
const  reducer=(state = initialState,action)=>{
    switch(action.type){
        case UPPER_DISPLAY:
            return{
                upperDisplayData: action.payload 
            }
            default:
                return state
            

    }
}
export default reducer;