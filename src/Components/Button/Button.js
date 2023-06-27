import React from 'react'
import styles from "./Button.module.css"

const Button = ({button_text, button_type}) => {
  return (
    <div className="d-grid">
      <button type={button_type} className="btn btn-success">{button_text}</button>
    </div>
  )
}

export default Button