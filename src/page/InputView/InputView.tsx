import { useEffect, useState } from "react";

//Components
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import Container from "../../components/atoms/Container/Container";
import Input from "../../components/atoms/Input/Input";
import Title from "../../components/atoms/Title/Title";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";

//Styles
import "./InputView.scss";

//Lenguajes
import { JavaScript, CSS, TypeScript, USE } from "./Lenguajes";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import Copy from "../../components/atoms/Copy/Copy";

const InputView = () => {
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
        <Container className="InputView">
            <Title title="Input" />
            <div className="container-code">
                <CodeTemplate>
                    <div className="code-left">
                        <ButtonHeader setSelect={setSelect} />
                        <div className="cnt-code">
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
                    </div>
                    <div className="code-right">
                        <SubtTitle title="Ejemplo" />
                        <div className="right_example">
                            <Input
                                text="Fullname"
                                type="text"
                                placeholder="Thomas Edison"
                            />
                            <Input
                                text="Email"
                                type="email"
                                placeholder="thomas.edison@example.com"
                            />
                            <Input
                                text="Number"
                                type="number"
                                placeholder="number"
                            />
                        </div>
                    </div>
                </CodeTemplate>
            </div>
        </Container>
    );
};

export default InputView;
