export const JavaScript = `
import React, { ChangeEventHandler, useState } from "react";

const InputPassword = ({
    className = "",
    text,
    name,
    value,
    placeholder,
    onChange,
}) => {
    const [inputType, setInputType] = useState(false);

    return (
        <div className={"InputPassword"}>
            {text && <span className="title-input">{text}</span>}
            <div className="container-input">
                <input
                    className={"cs-input"}
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

`;
export const TypeScript = `
import React, { ChangeEventHandler, useState } from "react";

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
        <div className={"InputPassword"}>
            {text && <span className="title-input">{text}</span>}
            <div className="container-input">
                <input
                    className={"cs-input"}
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

`;
export const SCSS = `
.InputPassword {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .title-input {
        font-size: 0.9rem;
        margin-left: 10px;
        color: #000;
    }

    .container-input {
        width: 100%;
        position: relative;

        .cs-input {
            width: 100%;
            height: 40px;
            outline: none;
            border: none;
            border-radius: 8px;
            padding: 0 10px;
            padding-right: 37px;
            font-size: 1rem;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        }

        .img-password{
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translate(0, -50%);
            cursor: pointer;
        }
    }
}
`;
export const USE = `
<InputPassword text="Password" placeholder="Password"/>
`;
