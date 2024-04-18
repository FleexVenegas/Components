import React, { useEffect, useState } from "react";

//Interfaces
import { ClassProps } from "../../../interfaces/ClassProps.interfaces";

//Style
import "./Aside.scss";
import { NavLink, useLocation } from "react-router-dom";
import Input from "../../atoms/Input/Input";

const Aside: React.FC<ClassProps> = ({ className = "" }) => {
    const [search, setSearch] = useState("");
    const [idComponent, setIdComponent] = useState<number | null>(null);
    const location = useLocation();

    const [optionComponents, setOptionComponents] = useState([
        {
            id: 1,
            text: "Input",
            url: "/component/input",
        },
        {
            id: 2,
            text: "Text area",
            url: "/component/text-area",
        },
        {
            id: 3,
            text: "Button",
            url: "/component/button",
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

    console.log(idComponent);

    return (
        <aside className={`Aside ${className}`}>
            <div className="cnt_components">
                <div className="cnt_input_title">
                    <h2 className="title_aside">Components</h2>
                    <Input
                        type="text"
                        placeholder="Search..."
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
