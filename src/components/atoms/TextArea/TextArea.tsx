//Styles
import React, { ChangeEventHandler } from "react";
import "./TextArea.scss";

//Interfaces
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
        <div className={`TextArea ${className}`}>
            {text && <span className="title-textarea">{text}</span>}
            <textarea
                className={`cs-textarea`}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default TextArea;
