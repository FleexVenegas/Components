export const JavaScript = `
import React from "react";

const ToggleTokens = ({ isChecked, setIsChecked, id, text = "Example" }) => {
    const handleToggleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="Container-toggleTokens">
            <input
                type="checkbox"
                id={id ? id : "toggle-check"}
                className="toggleTokens"
                checked={isChecked}
                onChange={handleToggleChange}
            />
            <label
                htmlFor={id ? id : "toggle-check"}
                className={'toggle-label ' + (isChecked ? 'checked-label' : '')}
            >
                {text}
            </label>
        </div>
    );
};

export default ToggleTokens;
`
export const TypeScript = `
import { Dispatch, SetStateAction } from "react";

interface ToggleTokensProps {
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
    text?: string;
    id: string;
}

const ToggleTokens = ({
    isChecked,
    setIsChecked,
    id,
    text = "Example",
}: ToggleTokensProps) => {
    const handleToggleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="Container-toggleTokens">
            <input
                type="checkbox"
                id={id ? id : "toggle-check"}
                className="toggleTokens"
                checked={isChecked}
                onChange={handleToggleChange}
            />
            <label
                htmlFor={id ? id : "toggle-check"}
                className={'toggle-label ' + (isChecked ? 'checked-label' : '')}
            >
                {text}
            </label>
        </div>
    );
};

export default ToggleTokens;
`
export const CSS = `
.Container-toggleTokens{
    width: 170px;
    height: 40px;
    background: #dbdbdb;
    border-radius: 17px;
    position: relative;
}

.toggleTokens{
    width: 100%;
    height: 100%;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    border-radius: 17px;
}

.toggleTokens:checked{
    background: #7090c0;
}

.toggle-label{
    position: absolute;
    top: 50%;
    left: 50%;
    user-select: none;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.checked-label{
    color: #fff;
}
`
export const USE = `
const [isCheckedOne, setIsCheckedOne] = useState(false);
const [isCheckedTwo, setIsCheckedTwo] = useState(true);
const [isCheckedThree, setIsCheckedThree] = useState(false);

<ToggleTokens
    isChecked={isCheckedOne}
    setIsChecked={setIsCheckedOne}
    id="option1"
    text="Option 1"
/>
<ToggleTokens
    isChecked={isCheckedTwo}
    setIsChecked={setIsCheckedTwo}
    id="option2"
    text="Option 2"
/>
<ToggleTokens
    isChecked={isCheckedThree}
    setIsChecked={setIsCheckedThree}
    id="option3"
    text="Option 3"
/>
`