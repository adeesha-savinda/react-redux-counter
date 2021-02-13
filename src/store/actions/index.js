const increment = () => {
    return { type: 'INC' }
};

const decrement = () => {
    return { type: 'DEC' }
};

const add = (val) => {
    return { type: 'ADD', value: val }
};

const substract = (val) => {
    return { type: 'SUB', value: val }
};

const storeResult = (val) => {
    return { type: 'STORE', counter: val }
};

const deleteResult = (val) => {
    return { type: 'DELETE', resultId: val }
};

const actions = {
    increment,
    decrement,
    add,
    substract,
    storeResult,
    deleteResult,
};

export default actions;