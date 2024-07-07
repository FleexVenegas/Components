import { useEffect, useState } from "react";

//Components
import AdvancedTemplate from "../../components/atoms/AdvancedTemplate/AdvancedTemplate";
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import Container from "../../components/atoms/Container/Container";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import Title from "../../components/atoms/Title/Title";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";

//Styles
import "./TableView.scss";
import Table from "../../components/organisms/Table/Table";
import { columns, data } from "./TableDatas";
import { CSS, JavaScript, TypeScript, USE } from "./TableViewLanguage";
import Copy from "../../components/atoms/Copy/Copy";

const TableView = () => {
    const [select, setSelect] = useState("JavaScript");

    const columnsTruncate = ["email"];

    const handleEdit = (id: string) => {
        alert(`Editar el: ${id}`);
    };

    const handleDelete = (id: string) => {
        alert(`Eliminar el: ${id}`);
    };

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
        <>
            <Container className="Table">
                <Title title="Table" />
                <AdvancedTemplate className="adv-temp">
                    <div className="example block-ex">
                        <SubtTitle title="Ejemplo" />
                        <Table
                            columns={columns}
                            data={data}
                            actions
                            rowPorPage={4}
                            truncate={columnsTruncate}
                            functionEdit={handleEdit}
                            functionDelete={handleDelete}
                        />
                    </div>
                    <div className="code" style={{marginTop: 20}}>
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
        </>
    );
};

export default TableView;
