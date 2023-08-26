import React from 'react'

export const Fotter = () => {
  let footer_style = {

    position: "relative",
    top: "70vh",
    
    width:" 100%",
   
  }
  return (
    <footer className='bg-dark text-light ' style={footer_style}>
      <p className="text-center">Copyright &copy; DarshansTodoList.com</p>

    </footer>
    
    
  )
}
