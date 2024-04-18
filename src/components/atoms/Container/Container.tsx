import React from "react";

//Styles
import "./Container.scss";

//Interfaces
import { ChildrenProps } from "../../../interfaces/ChildrenProps.interfaces";

const Container: React.FC<ChildrenProps> = ({ children, className = "" }) => {
    return (
        <section className={`Container`}>
            <div className={`cnt_inside ${className}`}>{children}</div>
        </section>
    );
};

export default Container;
