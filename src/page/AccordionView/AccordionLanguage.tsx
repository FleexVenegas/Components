export const JavaScript = `
import React, { useState } from "react";

const Accordion = ({ data }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleAccordion = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null); 
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className="Accordion">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={"accordion-item ${
                        "expandedIndex === index" ? "active_item" : ""
                    }"}
                >
                    <div
                        className={"accordion-title ${
                            "expandedIndex === index" ? "active" : ""
                        }"}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                    </div>
                    {expandedIndex === index && (
                        <div className="accordion-content">{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
`;
export const TypeScript = `
import React, { useState } from "react";

interface data {
    id: number;
    question: string;
    answer: string;
}

interface AccordionProps {
    className?: string;
    data: data[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number | null) => {
        if (expandedIndex === index) {
            setExpandedIndex(null); 
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className="Accordion">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={"accordion-item ${
                        "expandedIndex === index" ? "active_item" : ""
                    }"}
                >
                    <div
                        className={"accordion-title ${
                            "expandedIndex === index" ? "active" : ""
                        }"}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                    </div>
                    {expandedIndex === index && (
                        <div className="accordion-content">{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
`;
export const CSS = `
.Accordion {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    overflow: auto;
}

@media (max-width: 768px) {
    .Accordion {
        padding: 5px;
    }
}

.Accordion .accordion-item {
    width: 100%;
    border-radius: 12px;
    padding: 0 15px;
    transition: all 0.5s;
}

@media (max-width: 768px) {
    .Accordion .accordion-item {
        padding: 0 5px;
    }
}

.Accordion .accordion-item:hover {
    background: #ebebebe5;
}

.Accordion .accordion-item.active_item {
    background-color: rgba(178, 214, 255, 0.20);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.Accordion .accordion-item .accordion-title {
    width: 100%;
    height: 50px;
    user-select: none;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #000;
}

.Accordion .accordion-item .accordion-title.active {
    font-weight: 500;
}

.Accordion .accordion-item .accordion-content {
    font-size: 1rem;
    padding: 0 15px 15px;
    color: #313131;
}
`;
export const USE = `
const data = [
    {
        id: 1,
        question: "¿Por qué debería usar los componentes en React?",
        answer: "Porque mis componentes en React ofrecen soluciones " + 
            "preconstruidas y listas para usar que simplifican el " + 
            "desarrollo y garantizan una experiencia fluida para los " + 
            "desarrolladores.",
    },
    {
        id: 2,
        question:
            "¿Qué ventajas ofrecen tus componentes en comparación con otros?",
        answer: "Mis componentes destacan por su simplicidad y eficiencia. " + 
            "Están diseñados para ofrecer funcionalidades poderosas sin la " + 
            "necesidad de instalar dependencias externas, lo que simplifica el " + 
            "proceso de desarrollo y garantiza un rendimiento óptimo.",
    },
    {
        id: 3,
        question:
            "¿Cómo simplifican tus componentes el desarrollo en React sin instalar nada más?",
        answer: "Mis componentes en React son independientes y no " + 
            "requieren la instalación de ninguna dependencia adicional. " + 
            "Esto significa que los desarrolladores pueden comenzar a usarlos " + 
            "de inmediato y ajustarlos fácilmente según sus necesidades específicas, " + 
            "lo que agiliza el proceso de desarrollo y garantiza una integración sin complicaciones.",
    },
];

<Accordion data={data} />
`;
