export const JavaScript = `
import { useEffect, useRef, useState } from "react";

const DocumentUploader = ({ documentType, setFile }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
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
                "application/vnd.openxmlformats-officedocument.
                    wordprocessingml.document"
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
                        <img 
                            src={getFileIcon()} 
                            alt="" 
                            className="math-img" 
                        />
                        <button
                            className="cancel_file"
                            onClick={handleFileReset}
                        >
                            ❌
                        </button>
                    </div>
                    <label className="title-label">
                        {selectedFile.name}
                    </label>
                </div>
            ) : (
                <div className="cnt-allComponents-empty">
                    <div className="cnt_fileEmpty">
                        <img 
                            src={DownArrow} 
                            alt="" 
                            className="down_arrow" 
                        />
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        id="file-fileInput"
                        accept={documentType.join(", ")}
                        className="input_file"
                        onChange={handleFileSelect}
                    />
                    <label 
                        htmlFor="file-fileInput" 
                        className="label_btn"
                    >
                        Upload file
                    </label>
                </div>
            )}
        </>
    );
};

export default DocumentUploader;
`;

export const TypeScript = `
import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";


interface DocumentUploaderProps {
    documentType: string[];
    setFile: Dispatch<SetStateAction<File | undefined>>;
}

const DocumentUploader = ({ 
    documentType, 
    setFile 
}: DocumentUploaderProps) => {
    const [selectedFile, setSelectedFile] = 
        useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
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
                "application/vnd.openxmlformats-officedocument
                    .wordprocessingml.document"
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
                        <img 
                            src={getFileIcon()} 
                            alt="" 
                            className="math-img" 
                        />
                        <button
                            className="cancel_file"
                            onClick={handleFileReset}
                        >
                            ❌
                        </button>
                    </div>
                    <label className="title-label">
                            {selectedFile.name}
                    </label>
                </div>
            ) : (
                <div className="cnt-allComponents-empty">
                    <div className="cnt_fileEmpty">
                        <img 
                            src={DownArrow} 
                            alt="" 
                            className="down_arrow" 
                        />
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        id="file-fileInput"
                        accept={documentType.join(", ")}
                        className="input_file"
                        onChange={handleFileSelect}
                    />
                    <label 
                        htmlFor="file-fileInput" 
                        className="label_btn"
                    >
                        Upload file
                    </label>
                </div>
            )}
        </>
    );
};

export default DocumentUploader;
`;
export const CSS = `
.cnt-allComponentFile{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
}

.cnt_file{
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 10px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
    margin-bottom: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.math-img{
    width: 100px;
}

.title-label{
    font-size: 11px;
}

.cancel_file{
    position: absolute;
    top: -6px;
    right: -6px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
}


.cnt-allComponents-empty{
    position: relative;
    width: 120px;
    height: 150px;
}

.cnt_fileEmpty{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.down_arrow{
    width: 30px;
    height: 30px;
    animation: bounce 0.9s infinite;
}

.input_file{
    display: none;
}

.label_btn{
    width: 80px;
    height: 20px;
    position: absolute;
    top: 75%;
    left: calc(50% - 40px);
    font-size: 11px;
    background-color: #208fe8;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.label_btn:hover{
    background-color: rgb(18, 84, 182);
}  

@keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
}
`;
export const USE = `
//JavaScritp
const [file, setFile] = useState();
<DocumentUploader 
    documentType={[".pdf", ".docx"]} 
    setFile={setFile} 
/>

//TypeScript
const [file, setFile] = useState<File | undefined>();
<DocumentUploader 
    documentType={[".pdf", ".docx"]} 
    setFile={setFile} 
/>
`;
