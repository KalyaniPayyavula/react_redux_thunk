/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { UserContext } from "./Context";

export const ComponentFour = () => {
    const CounterContext = useContext(UserContext);
    return (
        <>
            <h1>Component Four count is {CounterContext.count}</h1>
            <button onClick={() => CounterContext.dispatchCount("increment")}>
                increment
            </button>
            <button onClick={() => CounterContext.dispatchCount("decrement")}>
                decrement
            </button>
            <button onClick={() => CounterContext.dispatchCount("reset")}>
                reset
            </button>
        </>
    );
};
