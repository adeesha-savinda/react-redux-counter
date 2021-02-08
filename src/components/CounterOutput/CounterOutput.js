import './CounterOutput.css'

const CounterOutput = (props) => {
    return (
        <div className="CounterOutput">
            Current Counter: {props.value}
        </div>
    )
};

export default CounterOutput;