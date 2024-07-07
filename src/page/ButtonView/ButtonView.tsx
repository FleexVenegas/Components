import { useEffect, useState } from "react";
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import Container from "../../components/atoms/Container/Container";
import Title from "../../components/atoms/Title/Title";
import "./ButtonView.scss";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import Button from "../../components/atoms/Button/Button";
import { CSS, JavaScript, TypeScript, USE } from "./ButtonViewLanguage";
import Copy from "../../components/atoms/Copy/Copy";

const ButtonView = () => {
    const [select, setSelect] = useState("JavaScript");

    useEffect(() => {
        const scrollToMyRef = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        scrollToMyRef();
    }, []);


    return (
        <Container className="ButtonView">
            <Title title="Button" />
            <CodeTemplate>
                <div className="code-left">
                    <ButtonHeader setSelect={setSelect} />
                    <Syntaxis>
                        {select === "JavaScript" && (
                            <>
                                {JavaScript}
                                <Copy dataCopy={JavaScript} />
                            </>
                        )}
                        {select === "TypeScript" && (
                            <>
                                {TypeScript}
                                <Copy dataCopy={TypeScript} />
                            </>
                        )}
                        {select === "CSS" && (
                            <>
                                {CSS}
                                <Copy dataCopy={CSS} />
                            </>
                        )}
                        {select === "USE" && (
                            <>
                                {USE}
                                <Copy dataCopy={USE} />
                            </>
                        )}
                    </Syntaxis>
                </div>
                <div className="code-right">
                    <SubtTitle title="Ejemplo" />
                    <div className="button-example">
                        <Button text="Normal" />
                        <Button text="Send" className="submit" />
                        <Button text="Cancel" className="cancel" />
                        <Button text="Question" className="question" />
                    </div>
                </div>
            </CodeTemplate>
        </Container>
    );
};

export default ButtonView;
