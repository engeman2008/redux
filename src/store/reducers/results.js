import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    //update state immutably
    switch (action.type) {
        case (actionTypes.STORE_RESULT):
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result }) //concat create new array
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