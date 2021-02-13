import { updateObject } from '../store/utility';

const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return updateObject(state, { counter: state.counter + 1 });
        case 'DEC':
            return updateObject(state, { counter: state.counter - 1 });
        case 'ADD':
            return updateObject(state, { counter: state.counter + action.value });
        case 'SUB':
            return updateObject(state, { counter: state.counter - action.value });
        default:
            return state;
    }
};

export default counterReducer;