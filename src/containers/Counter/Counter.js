import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import './Counter.css'

import { connect } from 'react-redux';
import { useState } from 'react';

const Counter = (props) => {
    const [valueState, setValueState] = useState({
        value: 0
    });

    const valueChangeHandler = (event) => {
        setValueState({
            value: parseInt(event.target.value),
        });
    };

    return (
        <div>
            <CounterOutput value={props.ctr} />
            <CounterControl label="Increment" clicked={props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
            <input
                type="number"
                placeholder="value"
                onChange={valueChangeHandler}
                value={valueState.value} />
            <CounterControl label="Add" clicked={() => props.onAddCounter(valueState.value)} />
            <CounterControl label="Sub" clicked={() => props.onSubstractCounter(valueState.value)} />
            <hr />
            <button className="StoreResultButton" onClick={() => props.onStoreResult(props.ctr)}>Store Result</button>
            <ul>
                {props.storedResults.map(result => (
                    // onDeleteStoredResult(result.id) function passes the id to the reducer
                    <li key={result.id} onClick={() => props.onDeleteStoredResult(result.id)}>{result.value}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ctr: state.counterReducer.counter,
        storedResults: state.resultsReducer.results,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INC' }),
        onDecrementCounter: () => dispatch({ type: 'DEC' }),
        onAddCounter: (value) => dispatch({ type: 'ADD', value: value }),
        onSubstractCounter: (value) => dispatch({ type: 'SUB', value: value }),
        onStoreResult: (ctr) => dispatch({ type: 'STORE', counter: ctr }),
        onDeleteStoredResult: (id) => dispatch({ type: 'DELETE', resultId: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);