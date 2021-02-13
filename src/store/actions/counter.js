const counterActions = {
    increment: () => {
        return { type: 'INC' }
    },
    decrement: () => {
        return { type: 'DEC' }
    },
    add: (val) => {
        return { type: 'ADD', value: val }
    },
    substract: (val) => {
        return { type: 'SUB', value: val }
    }
}

export default counterActions;
