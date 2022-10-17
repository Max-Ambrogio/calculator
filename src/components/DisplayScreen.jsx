import React from "react";
import Output from "./output";

const DisplayScreen = (props) => {
    return (
        <div className="display-output">
            <Output value = {props.question}/>
            <Output value = {props.answer}/>
        </div>
    );
}

export default DisplayScreen;