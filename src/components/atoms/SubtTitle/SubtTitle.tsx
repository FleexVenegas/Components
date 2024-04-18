import React from "react";
import "./SubTitle.scss";
import { TitleProps } from "../../../interfaces/Title.interfaces";

const SubtTitle: React.FC<TitleProps> = ({
    className = "",
    title,
    description,
}) => {
    return (
        <div className={`SubTitle ${className}`}>
            <h2 className="title-title">{title}</h2>
            {description && <p className="parr-title">{description}</p>}
        </div>
    );
};

export default SubtTitle;
