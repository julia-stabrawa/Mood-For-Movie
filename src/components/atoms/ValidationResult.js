import React from "react";

const ValidationResult = ({display, color, text}) => {
    return (
        <p
            style={{
                display: `${display}`,
                color: `${color}`,
                fontWeight: "600",
                textAlign: "center"
            }}>{text}</p>
    );
}

export default ValidationResult;