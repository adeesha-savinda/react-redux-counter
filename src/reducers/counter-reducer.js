const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            // Always use the spread operator (...) to copy the old state
            // This is to not to mutate the previous state and send the new state as a new JSON object
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            return state;
    }
};

export default counterReducer;