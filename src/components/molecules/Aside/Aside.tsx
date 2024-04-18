import React, { useEffect, useState } from "react";

//Interfaces
import { ClassProps } from "../../../interfaces/ClassProps.interfaces";

//Style
import "./Aside.scss";
import { NavLink } from "react-router-dom";
import Input from "../../atoms/Input/Input";

const Aside: React.FC<ClassProps> = ({ className = "" }) => {
    const [search, setSearch] = useState("");
    const optionComponents = [
        {
            id: 1,
            text: "Input",
            url: "/input",
        },
        {
            id: 2,
            text: "Text area",
            url: "#",
        },
        {
            id: 3,
            text: "Button",
            url: "#",
        },
    ];

    const [idComponent, setIdComponent] = useState<number | null>(1);

    useEffect(() => {
        setIdComponent(null);
        const handleSearch = () => {
            const foundComponent = optionComponents.find(
                (comp) => comp.text.toLowerCase() === search.toLowerCase()
            );
            if (foundComponent) {
                const idElement = foundComponent.id;
                setIdComponent(idElement);
            }
        };

        handleSearch();
    }, [search]);

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
                            className={`a-li ${_.id === idComponent ? "active" : ""}`}
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
