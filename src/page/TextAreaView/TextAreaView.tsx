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
import { JavaScript, CSS, TypeScript, USE } from "./TextAreaLanguages";
import Copy from "../../components/atoms/Copy/Copy";

const TextAreaView = () => {
    const [select, setSelect] = useState("JavaScript");

    return (
        <Container className="TextAreaView">
            <Title title="Text area" />
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
