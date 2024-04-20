export const CSS = `
.TextArea {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.title-textarea {
    font-size: 0.9rem;
    margin-left: 10px;
    color: #000;
}

.cs-textarea {
    width: 100%;
    height: 200px;
    resize: none;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 1rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}
`;

export const TypeScript = `
import React, { ChangeEventHandler } from "react";

interface TextAreaProps {
    className?: string;
    text?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = ({
    className = "",
    text,
    name,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <div className={"TextArea"}>
            {text && <span className="title-textarea">
                {text}
            </span>}
            <textarea
                className={"cs-textarea"}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default TextArea;
`;

export const JavaScript = `
import React from "react";

const TextArea = ({
    className,
    text,
    name,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <div className={"TextArea"}>
            {text && 
                <span className="title-textarea">
                    {text}
                </span>}
            <textarea
                className={"cs-textarea"}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default TextArea;
`;

export const USE = `
<TextArea text="Message" placeholder="Message" />
`;
