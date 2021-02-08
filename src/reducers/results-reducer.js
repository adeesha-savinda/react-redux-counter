const initialState = {
    results: []
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE':
            return {
                ...state,
                // concat is used instead of push - in an immutable way
                results: state.results.concat({ id: new Date(), value: action.counter }),
            }
        case 'DELETE':
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.resultId),
            }
        default:
            return state;
    }
};

export default counterReducer;