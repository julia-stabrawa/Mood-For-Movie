import React, {useState} from 'react';
import ValidationResult from "../atoms/ValidationResult";
import BtnAction from "../atoms/BtnAction";

const LogIn = ({logFunc}) => {
    const [name, setName] = useState("");
    const [errorName, setErrorName] = useState("none");
    const [success, setSuccess] = useState("none");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "") {
            setSuccess("block");
            setErrorName("none");
            localStorage.setItem("user", `${name}`);
            logFunc(true);
        } else if (name === "") {
            setErrorName("block");
        }
    }
    const nameCheck = (el) => {
        if (el.length > 3) {
            setName(el);
        }
    }

    return (
        <div className="log">
            <ValidationResult
                display={success}
                color={"green"}
                text={"Successfully logged in! You can now start creating your movie list!"}
            />
            <div className="contact__form">
                <form>
                    <h2>It looks like it's your first time here. Add your name below and create your own movie list.</h2>
                    <div className="form__row">
                        <ValidationResult
                            display={errorName}
                            color={"red"}
                            text={"Name is too short!"}
                        />
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form__input"
                            onChange={(e) => nameCheck(e.target.value)}
                        />
                    </div>
                    <div className="form__row-btn">
                        <BtnAction
                            clickAction={handleSubmit}
                            text={"Log in"}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;