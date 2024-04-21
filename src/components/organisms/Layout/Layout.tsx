import React from "react";

//Styles
import "./Layout.scss";

//Interfaces
import { ChildrenProps } from "../../../interfaces/ChildrenProps.interfaces";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import Aside from "../../molecules/Aside/Aside";

const Layout: React.FC<ChildrenProps> = ({ children, className = "" }) => {
    return (
        <div className={`Layout ${className}`}>
            <Header className="Header_" />
            <Aside className="Aside_" />
            <main className="View_">{children}</main>
            <Footer className="Footer_" />
        </div>
    );
};

export default Layout;
