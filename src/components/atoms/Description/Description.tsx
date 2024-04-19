import React from "react";

//Interfaces
interface DescriptionProps {
    children: React.ReactNode;
    className?: string;
}

//Styles
import "./Description.scss";

const Description: React.FC<DescriptionProps> = ({
    children,
    className = "",
}) => {
    return (
        <div className={`Description ${className}`}>
            <p className={`in-desc`}>{children}</p>
        </div>
    );
};

export default Description;
