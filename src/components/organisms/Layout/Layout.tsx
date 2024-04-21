import React from "react";

//Styles
import "./Layout.scss";

//Interfaces
import { ChildrenProps } from "../../../interfaces/ChildrenProps.interfaces";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import Aside from "../../molecules/Aside/Aside";
import { useStateContext } from "../../../context/ContextProvider";

const Layout: React.FC<ChildrenProps> = ({ children, className = "" }) => {
    const { windowWidth, setOpenAside } = useStateContext();

    return (
        <div className={`Layout ${className}`}>
            <Header className="Header_" />
            <Aside className="Aside_" />
            <main className="View_">
                {windowWidth && (
                    <div className="container-btn-aside">
                        <button
                            className="btn_aside"
                            onClick={() => setOpenAside(true)}
                        >
                            Componentes
                        </button>
                    </div>
                )}
                {children}
            </main>
            <Footer className="Footer_" />
        </div>
    );
};

export default Layout;
