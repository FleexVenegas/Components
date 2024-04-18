import React from "react";

//Styles
import "./CodeTemplate.scss";

//Interfaces
import { ChildrenProps } from "../../../interfaces/ChildrenProps.interfaces";

const CodeTemplate: React.FC<ChildrenProps> = ({
    children,
    className = "",
}) => {
    return <div className={`CodeTemplate ${className}`}>{children}</div>;
};

export default CodeTemplate;
