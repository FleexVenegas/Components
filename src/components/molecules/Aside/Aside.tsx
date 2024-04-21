import React, { useEffect, useState } from "react";

//Interfaces
import { ClassProps } from "../../../interfaces/ClassProps.interfaces";

//Style
import "./Aside.scss";
import { NavLink, useLocation } from "react-router-dom";
import Input from "../../atoms/Input/Input";
import { useStateContext } from "../../../context/ContextProvider";

const Aside: React.FC<ClassProps> = ({ className = "" }) => {
    const [search, setSearch] = useState("");
    const [idComponent, setIdComponent] = useState<number | null>(null);
    const location = useLocation();

    const { openAside, setOpenAside, windowWidth } = useStateContext();

    const [optionComponents, setOptionComponents] = useState([
        {
            id: 1,
            text: "Input",
            url: "/component/input",
        },
        {
            id: 2,
            text: "Text Area",
            url: "/component/text-area",
        },
        {
            id: 3,
            text: "Button",
            url: "/component/button",
        },
        {
            id: 4,
            text: "Select",
            url: "/component/select",
        },
        {
            id: 5,
            text: "Input Password",
            url: "/component/input-password",
        },
        {
            id: 6,
            text: "Upload Document",
            url: "/component/upload-document",
        },
        {
            id: 7,
            text: "Upload image",
            url: "/component/upload-image",
        },
        {
            id: 8,
            text: "Check Box",
            url: "/component/check-box",
        },
        {
            id: 8,
            text: "Toggle Token",
            url: "/component/toggle-token",
        },
    ]);

    useEffect(() => {
        const optionSort = [...optionComponents].sort((a, b) =>
            a.text.localeCompare(b.text)
        );
        setOptionComponents(optionSort);
    }, []);

    useEffect(() => {
        setIdComponent(null);
        const handleSearch = () => {
            const foundComponent = optionComponents.find(
                (comp) => comp.text.toLowerCase() === search.toLowerCase()
            );
            if (foundComponent) {
                const idElement = foundComponent.id;
                setIdComponent(idElement);
                setTimeout(() => {
                    setIdComponent(null);
                }, 7000);
            }
        };

        handleSearch();
    }, [search]);

    useEffect(() => {
        if (openAside) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [openAside]);

    return (
        <aside
            className={`Aside ${className} ${openAside ? "move-aside" : ""}`}
        >
            <button className="btn-close" onClick={() => setOpenAside(false)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                >
                    <path
                        fill="#fff"
                        d="M220 128a4 4 0 0 1-4 4H49.66l65.17 65.17a4 4 0 0 1-5.66 5.66l-72-72a4 4 0 0 1 0-5.66l72-72a4 4 0 0 1 5.66 5.66L49.66 124H216a4 4 0 0 1 4 4"
                    />
                </svg>
            </button>

            <div className="cnt_components">
                <div className="cnt_input_title">
                    <h2 className="title_aside">Componentes</h2>
                    <Input
                        type="text"
                        placeholder="Buscar..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <span className="line"></span>
                </div>
                <ul className="cnt_ul">
                    {optionComponents.map((_, idx) => (
                        <li
                            key={idx}
                            className={`a-li ${
                                location.pathname === _.url ? "active" : ""
                            } ${idComponent === _.id ? "found" : ""}`}
                            onClick={() =>
                                windowWidth ? setOpenAside(false) : null
                            }
                        >
                            <NavLink className={"text_compon"} to={_.url}>
                                {_.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
