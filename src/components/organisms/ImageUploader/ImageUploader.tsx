import React, { useState, useRef, useEffect } from 'react';
import './ImageUploader.scss'; // Archivo CSS donde se definen los estilos

import Pencil from '../../../assets/image/pencil.png'
import Close from '../../../assets/image/close.png'

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if(event.target.files[0].size <= 1000000){
        setSelectedImage(URL.createObjectURL(file));
    }
    else{
        alert("La imagen debe ser menor de 1MB")
    }
  };

  const handleImageReset = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <>
      {selectedImage ? (
        <div className="selected-image-container">
          <div className="cnt-img">
            <img className="selected-image" src={selectedImage} alt="Imagen seleccionada" />
          </div>
          <button className="change-image-button" onClick={handleImageReset}>
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
            <img src={Pencil} alt="Icono de lápiz" />
          </label>

        </div>
      )}
    </>
  );
};

export default ImageUploader;
