const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// reducers
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            };
        default:
            break;
    }
    return state;
};
// store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
    console.log('[SUB]', store.getState());
});

// dispatching action
store.dispatch({ type: 'INC_COUNTER' });
console.log(store.getState());
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());