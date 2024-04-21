import { Dispatch, SetStateAction } from "react";

//Styles
import "./ToggleTokens.scss";

//Interfaces
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
                className={`toggle-label ${isChecked ? "checked-label" : ""}`}
            >
                {text}
            </label>
        </div>
    );
};

export default ToggleTokens;
