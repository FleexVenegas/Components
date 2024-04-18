import React, { Dispatch, SetStateAction, useState } from "react";
import "./ButtonHeader.scss";

interface ButtonHeaderProps {
    setSelect: Dispatch<SetStateAction<string>>;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ setSelect }) => {
    const [selectButton, setSelectButton] = useState(1);

    const buttons = [
        { id: 1, text: "JavaScript" },
        { id: 2, text: "TypeScript" },
        { id: 3, text: "SCSS" },
    ];

    const handleSelect = (id: number, text: string) => {
        setSelectButton(id);
        setSelect(text);
    };

    return (
        <div className="ButtonHeader">
            {buttons.map((_, idx) => (
                <button
                    key={idx}
                    className={`btn_code ${
                        _.id === selectButton ? "active-button" : ""
                    }`}
                    onClick={() => handleSelect(_.id, _.text)}
                >
                    {_.text}
                </button>
            ))}
        </div>
    );
};

export default ButtonHeader;
