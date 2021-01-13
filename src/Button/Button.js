import React from "react";
import { Icon } from "./Icons/index";

const STYLES = [
    "btn--primary--solid",
    "btn--secondary--solid",
    "btn--warning--solid",
    "btn--disabled--solid",
    "btn--primary--text",
    "btn--secondary--text",
    "btn--warning--text",
    "btn--disabled--text",
    "btn--primary--outline",
    "btn--secondary--outline",
    "btn--warning--outline",
    "btn--disabled--outline",
    
]

const SIZES =[
    "btn--medium",
    "btn--large",
    "btn--small",
]


export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    buttonIcon
}) => {


    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0]; 

    return (
        <div className="container">
            
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} `}
        onClick={onClick} 
        type={type}
        buttonIcon={Icon}
        >
        {children}
        </button>
        </div>
    );
};