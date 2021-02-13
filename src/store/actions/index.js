import counterActions from './counter';
import resultsActions from './results';

const actions = {
    ...counterActions,
    ...resultsActions,
};

export default actions;