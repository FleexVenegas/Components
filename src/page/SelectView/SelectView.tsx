import { useState } from "react";

//Components
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import Container from "../../components/atoms/Container/Container";
import Select from "../../components/atoms/Select/Select";
import Title from "../../components/atoms/Title/Title";

//Styles
import "./SelectView.scss";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import { JavaScript, CSS, TypeScript, USE } from "./SelectViewLanguage";
import Copy from "../../components/atoms/Copy/Copy";

const SelectView = () => {
    const [select, setSelect] = useState("JavaScript");

    return (
        <Container className="SelectView">
            <Title title="Select" />
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
                    <div className="cnt_example">
                        <Select text="Select" />
                    </div>
                </div>
            </CodeTemplate>
        </Container>
    );
};

export default SelectView;
