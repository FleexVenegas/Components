import React, { useEffect, useState } from "react";

//Assets
import Logo from "../../../assets/images/LogoDV.webp";

//Styles
import "./Header.scss";

//Interfaces
import { ClassProps } from "../../../interfaces/ClassProps.interfaces";
import { NavLink } from "react-router-dom";

const Header: React.FC<ClassProps> = ({ className = "" }) => {
    const optionLink = [
        {
            id: 1,
            text: "Inicio",
            url: "/",
            target: "",
        },
        {
            id: 2,
            text: "Mi portafolio",
            url: "https://diegovenegas.businesscodebuilders.com/",
            target: "",
        },
        // { id: 2, text: "Option1", url: "#" },
        {
            id: 3,
            text: "GitHub",
            url: "https://github.com/FleexVenegas/Components",
            target: "_blank",
        },
    ];

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className={`Header ${className}`}>
            <div className="cnt_logo">
                <img src={Logo} alt="" />
                <label className="label_com">Components</label>
            </div>
            
            {windowWidth > 768 ? (
                <div className="cnt_options">
                    <nav className="cnt_nav">
                        {optionLink.map((_, idx) => (
                            <NavLink
                                to={_.url}
                                key={idx}
                                className={"link"}
                                target={_.target}
                            >
                                {_.text}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            ) : (
                <div>Es movil</div>
            )}
        </header>
    );
};

export default Header;
