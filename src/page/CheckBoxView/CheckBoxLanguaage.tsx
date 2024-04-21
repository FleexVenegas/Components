export const JavaScript = `
import React from "react";

const CheckBox = ({ isChecked, setIsChecked, id, text }) => {
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="Container-checkBox">
            <div className="circle-input">
                <input
                    id={id ? id : "check-box"}
                    type="checkbox"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                />
            </div>
            <label htmlFor={id ? id : "check-box"} className="check-label">
                {text}
            </label>
        </div>
    );
};

export default CheckBox;
`
export const TypeScript = `
import { Dispatch, SetStateAction } from "react";

interface CheckBoxProps {
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
    id?: string;
    text?: string;
}

const CheckBox = ({ isChecked, setIsChecked, id, text }: CheckBoxProps) => {
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="Container-checkBox">
            <div className="circle-input">
                <input
                    id={id ? id : "check-box"}
                    type="checkbox"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                />
            </div>
            <label htmlFor={id ? id : "check-box"} className="check-label">
                {text}
            </label>
        </div>
    );
};

export default CheckBox;
`
export const CSS = `
.Container-checkBox {
    display: flex;
    gap: 10px;
    align-items: center;
}

.circle-input{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    padding: 2px;
}

.checkbox {
    appearance: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
}

.checkbox:checked {
    background-color: #7090c0;
}

.check-label {
    color: #000;
    font-weight: 500;
    font-size: 1rem;
    user-select: none;
    cursor: pointer;
}
`
export const USE = `
const [isCheckedOne, setIsCheckedOne] = useState(false);
const [isCheckedTwo, setIsCheckedTwo] = useState(true);

<CheckBox
    setIsChecked={setIsCheckedOne}
    isChecked={isCheckedOne}
    text="Option 1"
    id="check-one"
/>
<CheckBox
    setIsChecked={setIsCheckedTwo}
    isChecked={isCheckedTwo}
    text="Option 2"
    id="check-two"
/>
`