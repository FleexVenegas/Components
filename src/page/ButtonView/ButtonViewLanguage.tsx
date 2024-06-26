export const CSS = `
.Button {
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 8px;
    color: #000;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    z-index: 1;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.Button:hover::before {
    width: 100%;
}

.Button.submit {
    background: #008000;
    color: #fff;
}

.Button.submit:hover::before {
    background: #004e00;
}

.Button.cancel {
    background: #ff0000;
    color: #fff;
}

.Button.cancel:hover::before {
    background: #ac0000;
}

.Button.question {
    background: #ffa500;
    color: #fff;
}

.Button.question:hover::before {
    background: #c27e00;
}

.Button::before {
    transition: all 0.5s;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 8px;
    z-index: -1;
}
`;

export const JavaScript = `
import React from 'react'

const Button = ({className, text, onClick}) => {
    return (
      <button className={"Button $("className")"} onClick={onClick}>
          {text}
      </button>
    )
  }
  
  export default Button
`;

export const TypeScript = `
import React from 'react'

interface ButtonProps{
    className?: string
    text: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
    className = "", 
    text, 
    onClick
}) => {
  return (
    <button className={"Button ${"className"}"} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button
`;

export const USE = `
<Button text="Normal" />
<Button text="Send" className="submit"/>
<Button text="Cancel" className="cancel"/>
<Button text="Question" className="question"/>
`;
