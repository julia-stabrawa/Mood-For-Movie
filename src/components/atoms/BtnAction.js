import React from "react";

const BtnAction = ({clickAction, text}) => {
    return (
        <button
            type="submit"
            className="form__btn"
            onClick={clickAction}
        >{text}</button>
    );
}

export default BtnAction;