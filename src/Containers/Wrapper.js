import React from 'react'
import "./Wrapper.css"

const Wrapper = ({children}) => {
  return (
    <div className="border py-2 mt-5 Wrapper" >{children}</div>
  )
}

export default Wrapper