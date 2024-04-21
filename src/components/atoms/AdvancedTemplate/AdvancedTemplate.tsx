import { ChildrenProps } from "../../../interfaces/ChildrenProps.interfaces";
import "./AdvancedTemplate.scss";

const AdvancedTemplate = ({ children }: ChildrenProps) => {
    return <div className="AdvancedTemplate">{children}</div>;
};

export default AdvancedTemplate;
