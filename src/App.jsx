import React from 'react'
import './index.css'
const App = () => {
  return (
    <div className='App'>
      <nav className='navbar'>
        <div className='logo'>
            <img src="images/brand_logo.png" alt="Nike logo" />
        </div>
        <div className='directing'>
        <a href="">MENU</a>
        <a href="">LOCATION</a>
        <a href="">ABOUT</a>
        <a href="">CONACT</a>
        </div>
        <div className="button">
          <button>Login</button>
        </div>
      </nav>
      <div className='main-container'>
        <div className='text-container'>
          <h1 className='text'>YOUR FEET <br /> DESERVE <br /> THE BEST</h1>
          <p className='para'>
            YOUR FEET DESERVES THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE'RE HERE TO HELP YOU WITH OUR<br />SHOES.
            </p>
            <div className="buttons">
              <button className='button-1'>Shop Now</button>
              <button className='button-2'>Category</button>
            </div>
            <p className='last-para'>Also Available On</p>
            <div className='last-image'>
            <img src="images\flipkart.png" alt="" />
            <img src="images/amazon.png" alt="" />
            </div>
            </div>
        <div className='image-container'>
          <img src="images/shoe_image.png" alt="shoes image" />
        </div>
      </div>
    </div>
  )
}

export default App