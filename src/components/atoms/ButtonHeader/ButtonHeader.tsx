import { Dispatch, SetStateAction, useEffect, useState } from "react";

//Styles
import "./ButtonHeader.scss";

//Assets
import Example from "../../../assets/images/ejemplo_code.png";
import { useStateContext } from "../../../context/ContextProvider";

interface ButtonHeaderProps {
    setSelect: Dispatch<SetStateAction<string>>;
}

const ButtonHeader = ({ setSelect }: ButtonHeaderProps) => {
    const [selectButton, setSelectButton] = useState(1);

    const { setShowModal, showModal } = useStateContext();

    const buttons = [
        { id: 1, text: "JavaScript" },
        { id: 2, text: "TypeScript" },
        { id: 3, text: "CSS" },
        { id: 5, text: "USE" },
    ];

    const handleSelect = (id: number, text: string) => {
        setSelectButton(id);
        setSelect(text);
    };

    return (
        <div className="ButtonHeader">
            <div className="cnt-btns">
                {buttons.map((_, idx) => (
                    <button
                        key={idx}
                        className={`btn_code ${
                            _.id === selectButton ? "active-button" : ""
                        }`}
                        onClick={() => handleSelect(_.id, _.text)}
                    >
                        {_.text}
                    </button>
                ))}
            </div>
            <button className="btn-kno" onClick={() => setShowModal(true)}>
                Lo que debes saber
            </button>
            {showModal && (
                <div className="container-info">
                    <button
                        className="btn-close"
                        onClick={() => setShowModal(false)}
                    >
                        ❌
                    </button>
                    <p className="p-info">
                        En algunos ejemplos, encontrarás fragmentos de código
                        como este:
                        <span className="spna-code">
                            <code className="code-info">
                                <span className="span-info">
                                    {`className={'toggle-label $(isChecked ? "checked-label" : '')'}`}
                                </span>
                            </code>
                        </span>
                        En donde se cambió las comillas invertidas del inicio
                        por comillas simples y las llaves por paréntesis, esto
                        ocurre porque no se puede formatear correctamente el
                        código, así que es solo una cuestión de estética para
                        facilitar la lectura y comprensión.
                    </p>
                    <p className="p-info">
                        Para solucionarlo, simplemente debemos cambiar las
                        comillas simples por comillas invertidas y los
                        paréntesis que estan después del signo de dolar, por
                        llaves.
                        <span>Por ejemplo: </span>
                    </p>
                    <img src={Example} alt="" className="img-example" />
                </div>
            )}
        </div>
    );
};

export default ButtonHeader;
