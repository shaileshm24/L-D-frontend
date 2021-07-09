import { userLogin } from "./login.actionTypes";
const INITIAL_STATE = {
    currentUser : null
}

const userLoginReducer = (currentState = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case userLogin.SET_CURRENT_USER:
          return {
            ...currentState,
            currentUser: action.payload
          } 

        default:
            return currentState;
    }
}


export default userLoginReducer;