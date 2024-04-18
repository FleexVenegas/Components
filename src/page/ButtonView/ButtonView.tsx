import { useState } from "react";
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import Container from "../../components/atoms/Container/Container";
import Title from "../../components/atoms/Title/Title";
import "./ButtonView.scss";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import Button from "../../components/atoms/Button/Button";
import { JavaScript, SCSS, TypeScript, USE } from "./ButtonViewLanguage";

const ButtonView = () => {
    const [select, setSelect] = useState("JavaScript");

    return (
        <Container className="ButtonView">
            <Title title="Button" />
            <CodeTemplate>
                <div className="code-left">
                    <ButtonHeader setSelect={setSelect} />
                    <Syntaxis>
                        {select === "JavaScript" && JavaScript}
                        {select === "TypeScript" && TypeScript}
                        {select === "SCSS" && SCSS}
                        {select === "USE" && USE}
                    </Syntaxis>
                </div>
                <div className="code-right">
                    <SubtTitle title="Example" />
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
