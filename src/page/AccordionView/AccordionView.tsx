//Styles
import "./AccordionView.scss";

//Components
import Container from "../../components/atoms/Container/Container";
import Title from "../../components/atoms/Title/Title";
import AdvancedTemplate from "../../components/atoms/AdvancedTemplate/AdvancedTemplate";
import Accordion from "../../components/organisms/Accordion/Accordion";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import { useState } from "react";
import { CSS, JavaScript, TypeScript, USE } from "./AccordionLanguage";
import Copy from "../../components/atoms/Copy/Copy";

const AccordionView = () => {
    const data = [
        {
            id: 1,
            question: "¿Por qué debería usar los componentes en React?",
            answer: "Porque mis componentes en React ofrecen soluciones preconstruidas y listas para usar que simplifican el desarrollo y garantizan una experiencia fluida para los desarrolladores.",
        },
        {
            id: 2,
            question:
                "¿Qué ventajas ofrecen tus componentes en comparación con otros?",
            answer: "Mis componentes destacan por su simplicidad y eficiencia. Están diseñados para ofrecer funcionalidades poderosas sin la necesidad de instalar dependencias externas, lo que simplifica el proceso de desarrollo y garantiza un rendimiento óptimo.",
        },
        {
            id: 3,
            question:
                "¿Cómo simplifican tus componentes el desarrollo en React sin instalar nada más?",
            answer: "Mis componentes en React son independientes y no requieren la instalación de ninguna dependencia adicional. Esto significa que los desarrolladores pueden comenzar a usarlos de inmediato y ajustarlos fácilmente según sus necesidades específicas, lo que agiliza el proceso de desarrollo y garantiza una integración sin complicaciones.",
        },
    ];

    const [select, setSelect] = useState("JavaScript");

    return (
        <Container className="AccordionView">
            <span></span>
            <Title title="Accordion" />
            <AdvancedTemplate>
                <div className="example">
                    <SubtTitle title="Ejemplo" />
                    <Accordion data={data} />
                </div>
                <div className="code">
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
            </AdvancedTemplate>
        </Container>
    );
};

export default AccordionView;
