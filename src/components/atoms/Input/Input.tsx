//Styles
import React, { ChangeEventHandler } from "react";
import "./Input.scss";

//Interfaces
interface InputProps {
    className?: string;
    text?: string;
    name?: string;
    value?: string;
    type: "text" | "email" | "number";
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
    className = "",
    text,
    name,
    value,
    type = "text",
    placeholder,
    onChange,
}) => {
    return (
        <div className={`Input ${className}`}>
            {text && <span className="title-input">{text}</span>}
            <input
                className={`cs-input`}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
