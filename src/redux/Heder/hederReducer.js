//import  GIVE_BACK_CAKE  from './cakeTypes'

const initialState = {
    numOfCakes: 10
}

const hederReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        
        case "GIVE_BACK_CAKE": return {
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        default: return state;
    }

}

export default hederReducer;