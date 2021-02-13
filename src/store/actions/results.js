const saveResult = val => {
    return { type: 'STORE', counter: val };
};

const resultsActions = {
    storeResult: (val) => {
        return dispatch => {
            setTimeout(() => {
                dispatch(saveResult(val));
            }, 2000);
        }
    },
    deleteResult: (val) => {
        return { type: 'DELETE', resultId: val }
    },
};

export default resultsActions;
