import React, { useState } from "react";

//styles
import "./Accordion.scss";

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
                    className={`accordion-item ${
                        expandedIndex === index ? "active_item" : ""
                    }`}
                >
                    <div
                        className={`accordion-title ${
                            expandedIndex === index ? "active" : ""
                        }`}
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
