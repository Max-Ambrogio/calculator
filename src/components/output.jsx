import React from "react";

const Output = (props) => {
    return(
        <div className="screen">
            <input type="text" readOnly value = {props.value} style={{border:'none', backgroundColor:'#B8CDFF'}} />
        </div>
    );
}

export default Output;