import React from "react";

//Assets
import Logo from "../../../assets/images/LogoDV.webp";

//Styles
import "./Header.scss";

//Interfaces
import { ClassProps } from "../../../interfaces/ClassProps.interfaces";
import { NavLink } from "react-router-dom";

const Header: React.FC<ClassProps> = ({ className = "" }) => {
    const optionLink = [
        { id: 1, text: "Home", url: "#" },
        { id: 2, text: "Option1", url: "#" },
        { id: 2, text: "Option1", url: "#" },
        { id: 2, text: "GitHub", url: "#" },
    ];

    return (
        <header className={`Header ${className}`}>
            <div className="cnt_logo">
                <img src={Logo} alt="" />
                <label className="label_com">Components</label>
            </div>
            <div className="cnt_options">
                <nav className="cnt_nav">
                    {optionLink.map((_, idx) => (
                        <NavLink to={_.url} key={idx} className={"link"}>
                            {_.text}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;