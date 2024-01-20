import { FETCH_DATA } from "./Actiontype"

const intialState = {
    user : []
}
export const reducer = (storeData=intialState,action)=>{
    if(action.type=FETCH_DATA){
        return {
            user : action.payload
        }
    }
    return storeData
}