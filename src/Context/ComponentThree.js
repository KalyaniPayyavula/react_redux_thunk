import { useContext } from "react";
import { UserContext } from "./Context";
import { ComponentFour } from "./ComponentFour";

export const ComponentThree = () => {
    const CounterContext = useContext(UserContext);
    return (
        <>
            <h1>Component Three count is {CounterContext.count}</h1>
            <button onClick={() => CounterContext.dispatchCount("increment")}>
                increment
            </button>
            <button onClick={() => CounterContext.dispatchCount("decrement")}>
                decrement
            </button>
            <button onClick={() => CounterContext.dispatchCount("reset")}>
                reset
            </button>
            <ComponentFour />
        </>
    );
};
