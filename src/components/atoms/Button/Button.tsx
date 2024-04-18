import React from 'react'

//Styles
import "./Button.scss"

//Interfaces
interface ButtonProps{
    className?: string
    text: string

}

const Button: React.FC<ButtonProps> = ({className = "", text}) => {
  return (
    <button className={`Button ${className}`}>
        {text}
    </button>
  )
}

export default Button