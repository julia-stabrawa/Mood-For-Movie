import React from "react";

const BtnAction = ({clickAction, text}) => {
    return (
        <button
            type="submit"
            className="genre__btn"
            onClick={clickAction}
        >{text}</button>
    );
}

export default BtnAction;