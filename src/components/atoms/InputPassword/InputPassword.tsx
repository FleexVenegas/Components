//Styles
import React, { ChangeEventHandler, useState } from "react";
import "./InputPassword.scss";

//Assets
import Eye from "./icon/eye.svg";
import Eye_off from "./icon/eye_off.svg";

//Interfaces
interface InputProps {
    className?: string;
    text?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputPassword: React.FC<InputProps> = ({
    className = "",
    text,
    name,
    value,
    placeholder,
    onChange,
}) => {
    const [inputType, setInputType] = useState(false);

    return (
        <div className={`InputPassword ${className}`}>
            {text && <span className="title-input">{text}</span>}
            <div className="container-input">
                <input
                    className={`cs-input`}
                    type={inputType ? "text" : "password"}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <img
                    src={inputType ? Eye_off : Eye}
                    alt=""
                    className="img-password"
                    onClick={() => setInputType(!inputType)}
                />
            </div>
        </div>
    );
};

export default InputPassword;
