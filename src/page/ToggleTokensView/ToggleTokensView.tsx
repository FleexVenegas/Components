import "./ToggleTokensView.scss";
import Container from "../../components/atoms/Container/Container";
import Title from "../../components/atoms/Title/Title";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import ToggleTokens from "../../components/atoms/ToggleTokens/ToggleTokens";
import { useState } from "react";
import { CSS, JavaScript, TypeScript, USE } from "./ToggleTokensLanguage";
import Copy from "../../components/atoms/Copy/Copy";

const ToggleTokensView = () => {
    const [isCheckedOne, setIsCheckedOne] = useState(false);
    const [isCheckedTwo, setIsCheckedTwo] = useState(true);
    const [isCheckedThree, setIsCheckedThree] = useState(false);
    const [select, setSelect] = useState("JavaScript");

    return (
        <Container className="ToggleTokensView">
            <Title title="Toggle Tokens" />
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
                    <ToggleTokens
                        isChecked={isCheckedOne}
                        setIsChecked={setIsCheckedOne}
                        id="option1"
                        text="Option 1"
                    />
                    <ToggleTokens
                        isChecked={isCheckedTwo}
                        setIsChecked={setIsCheckedTwo}
                        id="option2"
                        text="Option 2"
                    />
                    <ToggleTokens
                        isChecked={isCheckedThree}
                        setIsChecked={setIsCheckedThree}
                        id="option3"
                        text="Option 3"
                    />
                </div>
            </CodeTemplate>
        </Container>
    );
};

export default ToggleTokensView;
