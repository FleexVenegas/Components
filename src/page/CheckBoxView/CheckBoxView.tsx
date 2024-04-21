import { useState } from "react";

//Styles
import "./CheckBoxView.scss";

//Components
import Container from "../../components/atoms/Container/Container";
import Title from "../../components/atoms/Title/Title";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import CheckBox from "../../components/atoms/CheckBox/CheckBox";
import Copy from "../../components/atoms/Copy/Copy";
import { CSS, JavaScript, TypeScript, USE } from "./CheckBoxLanguaage";

const CheckBoxView = () => {
    const [select, setSelect] = useState("JavaScript");

    const [isCheckedOne, setIsCheckedOne] = useState(false);
    const [isCheckedTwo, setIsCheckedTwo] = useState(true);

    return (
        <Container className="CheckBoxView">
            <Title title="Check box" />
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
                    <CheckBox
                        setIsChecked={setIsCheckedOne}
                        isChecked={isCheckedOne}
                        text="Option 1"
                        id="check-one"
                    />
                    <CheckBox
                        setIsChecked={setIsCheckedTwo}
                        isChecked={isCheckedTwo}
                        text="Option 2"
                        id="check-two"
                    />
                </div>
            </CodeTemplate>
        </Container>
    );
};

export default CheckBoxView;
