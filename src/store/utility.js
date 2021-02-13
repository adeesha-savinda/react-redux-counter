export const updateObject = (oldState, updatedValuesObject) => {
    // Always use the spread operator (...) to copy the old state
    // This is to not to mutate the previous state and send the new state as a new JSON object
    return {
        ...oldState,
        ...updatedValuesObject,
    };
};