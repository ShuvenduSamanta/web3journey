import React from 'react'
import '../App.css'
const Nfts = () => {
  return (
    <div className='slider'>
        <span className='slider-span' id='slider-span1'></span>
        <span className='slider-span' id='slider-span2'></span>
        <span className='slider-span' id='slider-span3'></span>

        <div className='img-slider'>
            <div className='slide-div' id='s1'>
                <img src='img1' className='img' id='img1'/>
                <a href='#slider-span1' className='button' id='button1'></a>
            </div>
            <div className='slide-div' id='s2'>
                <img src='img1' className='img' id='img2'/>
                <a href='#slider-span2' className='button' id='button2'></a>
            </div>
            <div className='slide-div' id='s2'>
                <img src='img1' className='img' id='img2'/>
                <a href='#slider-span3' className='button' id='button3'></a>
            </div>
        </div>
    </div>
  )
}

export default Nfts