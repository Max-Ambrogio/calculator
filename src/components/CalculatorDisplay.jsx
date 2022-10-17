import React from "react";

const CalculatorDisplay = (props) => {
    return(
        <div className="calculator-display">
            {props.value}
        </div>
    );
}

export default CalculatorDisplay