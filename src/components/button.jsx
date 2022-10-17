import React from "react";



const Button = (props) => {
    return (
        <input style={{backgroundColor: '#E65C60', borderRadius:5, margin: 2, padding: 15, width: 50, textAlign: "center"}}  type='button' readOnly value={props.label} onClick={props.handleClick}/>
    );
}

export default Button;