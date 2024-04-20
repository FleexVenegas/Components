import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";

import DownArrow from "./documentIcon/arrow_down.svg";
import PdfFile from "./documentIcon/pdf.svg";
import Docx from "./documentIcon/docx.svg";
import Text from "./documentIcon/text.svg";

//Styles
import "./DocumentUploader.scss";

interface DocumentUploaderProps {
    documentType: string[];
    setFile: Dispatch<SetStateAction<File | undefined>>;
}

const DocumentUploader = ({ documentType, setFile }: DocumentUploaderProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
            setFile(files[0]);
        }
    };

    const handleFileReset = () => {
        setSelectedFile(null);
    };

    useEffect(() => {
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, []);

    const getFileIcon = () => {
        if (selectedFile) {
            if (selectedFile.type === "application/pdf") {
                return PdfFile;
            } else if (
                selectedFile.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ) {
                return Docx;
            } else if (selectedFile.type === "text/plain") {
                return Text;
            }
        }
        return undefined;
    };

    return (
        <>
            {selectedFile ? (
                <div className="cnt-allComponentFile">
                    <div className="cnt_file">
                        <img src={getFileIcon()} alt="" className="math-img" />
                        <button
                            className="cancel_file"
                            onClick={handleFileReset}
                        >
                            ❌
                        </button>
                    </div>
                    <label className="title-label">{selectedFile.name}</label>
                </div>
            ) : (
                <div className="cnt-allComponents-empty">
                    <div className="cnt_fileEmpty">
                        <img src={DownArrow} alt="" className="down_arrow" />
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        id="file-fileInput"
                        accept={documentType.join(", ")}
                        className="input_file"
                        onChange={handleFileSelect}
                    />
                    <label htmlFor="file-fileInput" className="label_btn">
                        Upload file
                    </label>
                </div>
            )}
        </>
    );
};

export default DocumentUploader;
