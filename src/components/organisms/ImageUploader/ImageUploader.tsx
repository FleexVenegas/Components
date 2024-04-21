import {
    useState,
    useRef,
    useEffect,
    ChangeEvent,
    Dispatch,
    SetStateAction,
} from "react";
import "./ImageUploader.scss"; // Archivo CSS donde se definen los estilos

interface ImageUploaderProps {
    setSelectedFile: Dispatch<SetStateAction<string | null>>;
}
    
const MAX_FILE_SIZE = 1000000; // 1MB

const ImageUploader = ({ setSelectedFile }: ImageUploaderProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
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

                    <label htmlFor="file-input" className="file-input-label">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 36 36"
                        >
                            <path
                                fill="#208fe8"
                                d="m4.22 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2.14 2.14 0 0 0 .43 0L13 32l15.84-15.78L20 7.4Z"
                                className="clr-i-solid clr-i-solid-path-1"
                            />
                            <path
                                fill="#208fe8"
                                d="m33.82 8.32l-5.9-5.9a2.07 2.07 0 0 0-2.92 0L21.72 5.7l8.83 8.83l3.28-3.28a2.07 2.07 0 0 0-.01-2.93"
                                className="clr-i-solid clr-i-solid-path-2"
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
