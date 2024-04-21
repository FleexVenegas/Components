import React from "react";

//Interfaces
import { ClassProps } from "../../../interfaces/ClassProps.interfaces";

//Styles
import "./Footer.scss";

//Components
import Description from "../../atoms/Description/Description";

const Footer: React.FC<ClassProps> = ({ className }) => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer className={`Footer ${className}`}>
            <Description className="p-footer">&copy; {getCurrentYear()} DV Components</Description>
        </footer>
    );
};

export default Footer;
