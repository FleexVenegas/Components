//Components
import { useEffect, useState } from "react";
import Container from "../../components/atoms/Container/Container";
import Title from "../../components/atoms/Title/Title";
import DocumentUploader from "../../components/organisms/DocumentUploader/DocumentUploader";

//Styles
import "./DocumentUploaderView.scss";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import { CSS, JavaScript, TypeScript, USE } from "./DocumentUploaderLanguage";
import Copy from "../../components/atoms/Copy/Copy";

const DocumentUploaderView = () => {
    const [file, setFile] = useState<File | undefined>();
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
        <Container className={`DocumentUploaderView ${file?.name ? "" : ""}`}>
            <Title title="Upload document" />
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
                    <DocumentUploader
                        documentType={[".pdf", ".docx"]}
                        setFile={setFile}
                    />
                </div>
            </CodeTemplate>
        </Container>
    );
};

export default DocumentUploaderView;
