import React, { useEffect, useRef } from 'react'
import "./Navbar.css"

const Navbar = ({children}) => {

  const headerRef = useRef()
  const button = useRef()

  const toggleNav = ()=>{
     headerRef.current.classList.toggle("toggle")
  }

  useEffect(()=>{

    const observer = new IntersectionObserver((entry)=>{
        entry.forEach((element)=>{
          if(!element.isIntersecting){
             document.querySelector(".my-nav").classList.remove("toggle")
          }
        })
    })

    if (button){
      observer.observe(button.current)
    }

    window.addEventListener("scroll",()=>{
      if(window.scrollY > 70){
        headerRef.current.classList.add("nav-shadow")
      } else {
        headerRef.current.classList.remove("nav-shadow")
      }
    } ) 
    
  }, [])

  
  return (
    <div className='container-fluid my-nav overflow-hidden position-fixed top-0' ref={headerRef}>
      <nav className='container-lg d-lg-flex justify-content-between py-2 position-relative'>
      <a className='navbar-brand text-decoration-none text-success d-inline-block fw-bold ' href="#" role='button'>UMAXCODE</a>
      <div className='my-menu mt-1 d-lg-none me-2' role='button'onClick={toggleNav} ref={button}>
        <div className='bg-success'></div>
        <div className='bg-success'></div>
        <div className='bg-success'></div>
      </div>
      <div className='d-lg-flex  align-items-center  flex-grow-1 d-block  '>
      {children}
      <div className='px-2 d-lg-block d-grid py-0'>
      <button className='btn btn-success rounded-pill'>Download CV</button>
      </div>
      </div>
      </nav>
    </div>
  )
}

export default Navbar