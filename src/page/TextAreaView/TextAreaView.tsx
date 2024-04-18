import { useState } from "react";

//Components
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import Container from "../../components/atoms/Container/Container";
import Title from "../../components/atoms/Title/Title";

//Styles
import "./TextAreaView.scss";
import TextArea from "../../components/atoms/TextArea/TextArea";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import { JavaScript, SCSS, TypeScript, USE } from "./TextAreaLanguages";

const TextAreaView = () => {
    const [select, setSelect] = useState("JavaScript");

    return (
        <Container className="TextAreaView">
            <Title title="Text area" />
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
                    <div className="cnt-textarea">
                        <TextArea text="Message" placeholder="Message" />
                    </div>
                </div>
            </CodeTemplate>
        </Container>
    );
};

export default TextAreaView;
