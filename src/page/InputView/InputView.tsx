import { useState } from "react";

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
import { JavaScript, SCSS, TypeScript, Use } from "./Lenguajes";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";

const InputView = () => {
    const [selectLenguaje, setSelectLenguaje] = useState("JavaScript");

    return (
        <Container className="InputView">
            <Title title="Input" />
            <div className="container-code">
                <CodeTemplate>
                    <div className="code-left">
                        <ButtonHeader setSelect={setSelectLenguaje} />
                        <div className="cnt-code">
                            <Syntaxis>
                                {selectLenguaje === "JavaScript" && JavaScript}
                                {selectLenguaje === "TypeScript" && TypeScript}
                                {selectLenguaje === "SCSS" && SCSS}
                                {selectLenguaje === "USE" && Use}
                            </Syntaxis>
                        </div>
                    </div>
                    <div className="code-right">
                        <SubtTitle title="Example" />
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
