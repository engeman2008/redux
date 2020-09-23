import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    //update state immutably
    switch (action.type) {
        case (actionTypes.INCREMENT):
            const newState = Object.assign({}, state); //clone the state immutable way
            newState.counter = state.counter + 1;
            return newState;
        case (actionTypes.DECREMENT):
            return {
                ...state,
                counter: state.counter - 1
            }
        case (actionTypes.ADD):
            return {
                ...state,
                counter: state.counter + action.value
            }
        case (actionTypes.SUBTRACT):
            return {
                ...state,
                counter: state.counter - action.value
            }
        case (actionTypes.STORE_RESULT):
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter }) //concat create new array
            }
        case (actionTypes.DELETE_RESULT):
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            //filter return new array
            const updatedArray = state.results.filter((el, index) => el.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
}

export default reducer;