import React from 'react'

const Section = ({height, children}) => {
  return (
    <section style={{marginTop: "100px", marginBottom: "100px"}} className='container-lg d-flex justify-content-center align-items-center'>
      <div className='row g-3'>
        {children}
      </div>
    </section>
  )
}

export default Section