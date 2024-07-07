import { ChildrenProps } from "../../../interfaces/ChildrenProps.interfaces";
import "./AdvancedTemplate.scss";

const AdvancedTemplate = ({ children, className }: ChildrenProps) => {
    return <div className={`AdvancedTemplate ${className}`}>{children}</div>;
};

export default AdvancedTemplate;
