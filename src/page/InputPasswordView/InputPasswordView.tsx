import { useState } from "react";

//Components
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import Container from "../../components/atoms/Container/Container";
import InputPassword from "../../components/atoms/InputPassword/InputPassword";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import Title from "../../components/atoms/Title/Title";

//Styles
import "./InputPasswordView.scss";

//Languahes
import { JavaScript, CSS, TypeScript, USE } from "./InputPasswordViewLanguaje";
import Copy from "../../components/atoms/Copy/Copy";

const InputPasswordView = () => {
    const [select, setSelect] = useState("JavaScript");

    return (
        <Container className="InputPasswordView">
            <Title title="Input Password" />
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
                    <InputPassword text="Password" placeholder="Password" />
                </div>
            </CodeTemplate>
        </Container>
    );
};

export default InputPasswordView;
