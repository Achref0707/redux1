import { MINUS, PLUS } from "../actiontype/counter"

const initialState = {
counter:0
}

const ReducerCounter= (state = initialState, {type, payload }) => {
  switch (type) {
    case PLUS:
        return{...state,counter:state.counter+1}

    case MINUS:
        return{...state,counter:state.counter-1}
    default:
        return state 
  }
  
}
export default ReducerCounter