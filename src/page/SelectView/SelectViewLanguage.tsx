export const Javascript = `
import React from "react";

const Select = ({ text, name, value, onChange }) => {
    const selectionOption = [
        { id: 1, text: "Select an option", value: "" },
        { id: 2, text: "Option 1", value: "option2" },
        { id: 3, text: "Option 2", value: "option3" },
        { id: 4, text: "Option 3", value: "option4" },
        { id: 5, text: "Option 4", value: "option5" },
    ];

    return (
        <div className={"Select"}>
            {text && <span className="text_input">{text}</span>}
            <select
                value={value}
                name={name}
                id="select_"
                className={"select-select"}
                onChange={onChange}
                required
            >
                {selectionOption.map((_, idx) => (
                    <option key={idx} value={_.value}>
                        {_.text}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;

`;

export const TypeScript = `
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
                    <option key={idx} value={_.value}>
                        {_.text}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
`;

export const SCSS = `
.Select {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .text-select {
        font-size: 1rem;
        color: #000;
        margin-left: 10px;
    }

    .select-select {
        border: none;
        outline: none;
        background: #fff;
        height: 40px;
        width: 100%;
        border-radius: 8px;
        font-size: 1rem;
        padding: 0 10px;
        color: #1a2931;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

        option {
            font-size: 1rem;
            color: #2d414c;
            border-radius: 15px;
        }
    }
}
`;

export const USE = `
<Select text="Select" />
`;
