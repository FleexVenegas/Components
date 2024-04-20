export const JavaScript = `
import React from "react";

const Input = ({
    className, 
    text, 
    type, 
    name, 
    value, 
    placeholder, 
    onChange
}) => {
    return (
        <div className={"Input"}>
            {text && 
                <span className="title-input">
                    {text}
                </span>
            }
            <input
                className={"cs-input"}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;
`;

export const TypeScript = `
import React, { ChangeEventHandler } from "react";

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
        <div className={"Input"}>
            {text && 
                <span className="title-input">
                    {text}
                </span>
            }
            <input
                className={"cs-input"}
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
`;

export const CSS = `
.Input {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.title-input {
    font-size: 0.9rem;
    margin-left: 10px;
    color: #000;
}


.cs-input {
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 0 10px;
    font-size: 1rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}
`;


export const USE = `
<Input
    text="Fullname"
    type="text"
    placeholder="Thomas Edison"
/>
<Input
    text="Email"
    type="email"
    placeholder="thomas.edison@example.com"
/>
<Input
    text="Number"
    type="number"
    placeholder="number"
/>
`