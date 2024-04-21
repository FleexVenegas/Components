export const JavaScript = `
import { useState, useRef, useEffect } from "react";

//Equivale a un 1MB
const MAX_FILE_SIZE = 1000000;

const ImageUploader = ({ setSelectedFile }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = ( e ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size <= MAX_FILE_SIZE) {
            setSelectedImage(URL.createObjectURL(file));
            setSelectedFile(URL.createObjectURL(file));
        } else {
            alert("La imagen debe ser menor de 1MB");
        }
    };

    const handleImageReset = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, []);

    return (
        <>
            {selectedImage ? (
                <div className="selected-image-container">
                    <div className="cnt-img">
                        <img
                            className="selected-image"
                            src={selectedImage}
                            alt="Imagen seleccionada"
                        />
                    </div>
                    <button
                        className="change-image-button"
                        onClick={handleImageReset}
                    >
                        ❌
                    </button>
                </div>
            ) : (
                <div className="cnt_file-chosse">
                    <input
                        ref={fileInputRef}
                        id="file-input"
                        className="file-input_img"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <div className="div_showImage"></div>

                    <label 
                        htmlFor="file-input" 
                        className="file-input-label"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 36 36"
                        >
                            <path
                                fill="#208fe8"
                                d="m4.22 23.2l-1.9 8.2a2.06 2
                                    .06 0 0 0 2 2.5a2.14 2.
                                    14 0 0 0 
                                    .43 0L13 32l15.84-15.
                                    78L20 7.4Z"
                                className="
                                    clr-i-solid 
                                    clr-i-solid-path-1"
                            />
                            <path
                                fill="#208fe8"
                                d="m33.82 8.32l-5.9-5.9a2.07 2
                                .07 0 0 0-2
                                .92 0L21.72 5.7l8.83 8
                                .83l3.28-3.28a2.07 2.07 0 0 0-
                                .01-2.93"
                                className="
                                    clr-i-solid 
                                    clr-i-solid-path-2"
                            />
                            <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                    </label>
                </div>
            )}
        </>
    );
};

export default ImageUploader;
`
export const TypeScript = `
import {
    useState,
    useRef,
    useEffect,
    ChangeEvent,
    Dispatch,
    SetStateAction,
} from "react";

interface ImageUploaderProps {
    setSelectedFile: Dispatch<SetStateAction<string | null>>;
}

//Equivale a un 1MB
const MAX_FILE_SIZE = 1000000;

const ImageUploader = ({ 
    setSelectedFile 
}: ImageUploaderProps) => {
    const [selectedImage, setSelectedImage] = 
        useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size <= MAX_FILE_SIZE) {
            setSelectedImage(URL.createObjectURL(file));
            setSelectedFile(URL.createObjectURL(file));
        } else {
            alert("La imagen debe ser menor de 1MB");
        }
    };

    const handleImageReset = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, []);

    return (
        <>
            {selectedImage ? (
                <div className="selected-image-container">
                    <div className="cnt-img">
                        <img
                            className="selected-image"
                            src={selectedImage}
                            alt="Imagen seleccionada"
                        />
                    </div>
                    <button
                        className="change-image-button"
                        onClick={handleImageReset}
                    >
                        ❌
                    </button>
                </div>
            ) : (
                <div className="cnt_file-chosse">
                    <input
                        ref={fileInputRef}
                        id="file-input"
                        className="file-input_img"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <div className="div_showImage"></div>

                    <label 
                        htmlFor="file-input" 
                        className="file-input-label"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 36 36"
                        >
                            <path
                                fill="#208fe8"
                                d="m4.22 23.2l-1.9 8.2a2.06 2
                                    .06 0 0 0 2 2.5a2.14 2.
                                    14 0 0 0 
                                    .43 0L13 32l15.84-15.
                                    78L20 7.4Z"
                                className="
                                    clr-i-solid 
                                    clr-i-solid-path-1"
                            />
                            <path
                                fill="#208fe8"
                                d="m33.82 8.32l-5.9-5.9a2.07 2
                                .07 0 0 0-2
                                .92 0L21.72 5.7l8.83 8
                                .83l3.28-3.28a2.07 2.07 0 0 0-
                                .01-2.93"
                                className="
                                    clr-i-solid 
                                    clr-i-solid-path-2"
                            />
                            <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                    </label>
                </div>
            )}
        </>
    );
};

export default ImageUploader;
`
export const CSS = `
.selected-image-container {
    position: relative;
    width: 150px;
    height: 150px;
}

.selected-image-container .cnt-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.selected-image-container .cnt-img .selected-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.selected-image-container .change-image-button {
    width: 30px;
    height: 30px;
    position: absolute;
    border: none;
    outline: none;
    top: 0;
    right: 10px;
    border-radius: 50%;
    background-color: #fff;
    color: #fff;
    cursor: pointer;
}

.cnt_file-chosse {
    position: relative;
    width: 150px;
    height: 150px;
}

.cnt_file-chosse .file-input_img {
    display: none;
}

.cnt_file-chosse .div_showImage {
    width: 100%;
    height: 100%;
    background: #fff;
    background-image: url(./uploaderIcon/user.svg);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
}

.cnt_file-chosse .file-input-label {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    right: 10px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.cnt_file-chosse .file-input-label:hover {
    background: rgba(32, 142, 232, 0.5);
}
`
export const USE = `
//JavaScript
const [selectedImage, setSelectedImage] = useState(null);
<ImageUploader setSelectedFile={setSelectedImage} />


//TypeScript
const [selectedImage, setSelectedImage] = useState<string | null>(null);
<ImageUploader setSelectedFile={setSelectedImage} />
`