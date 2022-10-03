/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { ComponentTwo } from "./ComponentTwo";
import { UserContext } from "./Context";

export const ComponentOne = () => {
    const test = useContext(UserContext);

    return (
        <>
            <h1>Component One {test.countState}</h1>
            <ComponentTwo />
        </>
    );
};
