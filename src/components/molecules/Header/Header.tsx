import React, { useState } from "react";

//Assets
import Logo from "../../../assets/images/LogoDV.webp";

//Styles
import "./Header.scss";

//Interfaces
import { ClassProps } from "../../../interfaces/ClassProps.interfaces";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";

const Header: React.FC<ClassProps> = ({ className = "" }) => {
    const { windowWidth } = useStateContext();
    const [openModal, setOpenModal] = useState(false);

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

    return (
        <header className={`Header ${className}`}>
            <div className="cnt_logo">
                <img src={Logo} alt="" />
                <label className="label_com">Components</label>
            </div>

            {!windowWidth ? (
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
                <div className="container-movil">
                    <button
                        className="btn-movil"
                        onClick={() => setOpenModal(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#ffffff"
                                d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                            />
                        </svg>
                    </button>
                    <div
                        className={`container-options ${
                            openModal ? "move-container" : ""
                        }`}
                    >
                        <nav className="cnt_nav">
                            {optionLink.map((_, idx) => (
                                <NavLink
                                    to={_.url}
                                    key={idx}
                                    className={"link"}
                                    target={_.target}
                                    onClick={() => setOpenModal(false)}
                                >
                                    {_.text}
                                </NavLink>
                            ))}
                        </nav>
                        <button
                            className="btn-close"
                            onClick={() => setOpenModal(false)}
                        >
                            ❌
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
