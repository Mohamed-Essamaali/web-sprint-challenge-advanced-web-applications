

const initialState = {
    user:{username:'',password:''}
}

const myReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
        return{...state,user:action.payload};
        case SUCCESS:
            return {...state}
    default:
        return state;
    }
}

export default myReducer