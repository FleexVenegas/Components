//Styles
import { Dispatch, SetStateAction } from "react";
import "./CheckBox.scss";

//Interfaces
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
