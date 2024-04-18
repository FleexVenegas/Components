//Components
import { useState } from "react";
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import Container from "../../components/atoms/Container/Container";
import Input from "../../components/atoms/Input/Input";
import Title from "../../components/atoms/Title/Title";

//Styles
import "./InputView.scss";

const InputView = () => {
    const [selectLenguaje, setSelectLenguaje] = useState("JavaScript");

    return (
        <Container className="InputView">
            <Title title="Input" />
            <div className="container-code">
                <CodeTemplate>
                    <div className="code-left">
                        <ButtonHeader setSelect={setSelectLenguaje} />
                        <div className="cnt-code">
                            <pre>
                                {selectLenguaje === "JavaScript" && (
                                    <code className="code_">
                                        {`
    import React, { ChangeEventHandler } from "react";

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
    
                                        `}
                                    </code>
                                )}
                                {selectLenguaje === "TypeScript" && (
                                    <code className="code_">
                                        {`
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
                                    `}
                                    </code>
                                )}
                                {selectLenguaje === "SCSS" && (
                                    <code className="code_">
                                        {`
    .Input {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    
        .title-input {
            font-size: 0.9rem;
            margin-left: 10px;
            color: #fff;
        }
    
    
        .cs-input {
            width: 100%;
            height: 40px;
            outline: none;
            border: none;
            border-radius: 8px;
            padding: 0 10px;
            font-size: 1rem;
        }
    }
                                        `}
                                    </code>
                                )}
                            </pre>
                        </div>
                    </div>
                    <div className="code-right">
                        <h2>Example</h2>
                        <div className="right_example">
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
                        </div>
                    </div>
                </CodeTemplate>
            </div>
        </Container>
    );
};

export default InputView;
