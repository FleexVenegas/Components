import React from "react";
import "./Syntaxis.scss";
import { ChildrenProps } from "../../../interfaces/ChildrenProps.interfaces";

const Syntaxis: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="Syntaxis">
            <pre className="syn-pre">
                <code className="syn-code">{children}</code>
            </pre>
        </div>
    );
};

export default Syntaxis;
