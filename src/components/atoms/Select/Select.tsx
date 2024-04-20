import React from "react";

//Styles
import "./Select.scss";

interface SelectProps {
    text?: string;
    value?: string;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select = ({ text, name, value, onChange }: SelectProps) => {
    const selectionOption = [
        { id: 1, text: "Select an option", value: "" },
        { id: 2, text: "Option 1", value: "option2" },
        { id: 3, text: "Option 2", value: "option3" },
        { id: 4, text: "Option 3", value: "option4" },
        { id: 5, text: "Option 4", value: "option5" },
    ];

    return (
        <div className={"Select"}>
            {text && <span className="text-select">{text}</span>}
            <select
                value={value}
                name={name}
                id="select_"
                className={"select-select"}
                onChange={onChange}
                required
            >
                {selectionOption.map((_, idx) => (
                    <option className="select-option" key={idx} value={_.value}>
                        {_.text}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
