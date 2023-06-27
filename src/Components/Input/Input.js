import React from 'react'

const Input = ({label_text, input_type, placeholder}) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={label_text}>{label_text}</label>
      <input className="form-control" id={label_text} type={input_type} placeholder={placeholder}/>
    </div>
  )
}

export default Input
