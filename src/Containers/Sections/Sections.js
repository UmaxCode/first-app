import React from 'react'

const Sections = ({children, id}) => {
  return (
    <section  className='container' id={id}>
       {children}
    </section>
  )
}

export default Sections