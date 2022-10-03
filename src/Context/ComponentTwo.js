import { ComponentThree } from "./ComponentThree";
import { useContext } from "react";
import { UserContext } from "./Context";

export const ComponentTwo = () => {
    const CounterContext = useContext(UserContext);
    return (
        <>
            <h1>Component Two count is {CounterContext.count}</h1>
            <button onClick={() => CounterContext.dispatchCount("increment")}>
                increment
            </button>
            <button onClick={() => CounterContext.dispatchCount("decrement")}>
                decrement
            </button>
            <button onClick={() => CounterContext.dispatchCount("reset")}>
                reset
            </button>
            <ComponentThree />
        </>
    );
};
