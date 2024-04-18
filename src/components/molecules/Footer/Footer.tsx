import React from 'react'

//Interfaces
import { ClassProps } from '../../../interfaces/ClassProps.interfaces'

//Styles
import "./Footer.scss"

const Footer: React.FC<ClassProps> = ({className}) => {
  return (
    <footer className={`Footer ${className}`}>Footer</footer>
  )
}

export default Footer