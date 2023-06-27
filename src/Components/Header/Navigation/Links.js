import React, { useEffect } from 'react'

const Links = () => {


  useEffect(()=>{
       const lis= document.querySelectorAll("li")
       lis.forEach((element)=>{
        element.addEventListener("click", function(){
            console.log(window.scrollY)
        })
       })

  }, [])

  return (
      <ul className='list-unstyled d-lg-flex justify-content-center align-items-center  mb-0 flex-grow-1'>
        <li className='m-lg-2 mx-2 my-1  py-2 px-1 p-lg-0 rounded' role='button'><a href="#" className='text-success text-decoration-none'>Home</a></li>
        <li className='m-lg-2 mx-2 my-1  py-2 px-1 p-lg-0 rounded' role='button'><a href='' className='text-success text-decoration-none'>About Me</a></li>
        <li className='m-lg-2 mx-2 my-1  py-2 px-1 p-lg-0 rounded' role='button'><a href='#services' className='text-success text-decoration-none'>Services</a></li>
        <li className='m-lg-2 mx-2 my-1  py-2 px-1 p-lg-0 rounded' role='button'><a href='#projects' className='text-success text-decoration-none'>Projects</a></li>
        <li className='m-lg-2 mx-2 my-1  py-2 px-1 p-lg-0 rounded' role='button'><a href='#testimonials' className='text-success text-decoration-none'>Testimonials</a></li>
        <li className='m-lg-2 mx-2 my-1  py-2 px-1 p-lg-0 rounded' role='button'><a href='#contact' className='text-success text-decoration-none'>Contact</a></li>
        
      </ul>
  )
}

export default Links