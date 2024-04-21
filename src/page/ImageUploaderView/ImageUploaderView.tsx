import { useState } from "react";
import Container from "../../components/atoms/Container/Container";
import Title from "../../components/atoms/Title/Title";
import ImageUploader from "../../components/organisms/ImageUploader/ImageUploader";
import "./ImageUploaderView.scss";
import CodeTemplate from "../../components/atoms/CodeTemplate/CodeTemplate";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import ButtonHeader from "../../components/atoms/ButtonHeader/ButtonHeader";
import Syntaxis from "../../components/atoms/Syntaxis/Syntaxis";
import Copy from "../../components/atoms/Copy/Copy";
import { CSS, JavaScript, TypeScript, USE } from "./ImageUploaderLanguaje";

const ImageUploaderView = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [select, setSelect] = useState("JavaScript");
    return (
        <Container className={`ImageUploaderView ${selectedImage ? "" : ""}`}>
            <Title title="Image Uploader" />
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
                    <ImageUploader setSelectedFile={setSelectedImage} />
                </div>
            </CodeTemplate>
        </Container>
    );
};

export default ImageUploaderView;
