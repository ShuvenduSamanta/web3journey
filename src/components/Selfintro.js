import React from 'react'
import Roadmap from './Roadmap'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link as log } from 'react-router-dom';
import '../App.css'
const Selfintro = () => {
  return (
    
    <section className='intro'>
      
        <div className='intro-content'>
            <h1>I am <br></br>Shuvendu Samanta</h1>
            <h3>Crypto <span>Lover</span></h3><br></br><br></br>
            <p>I am a blockchain expert with 1 years of experience in the field. I have a deep understanding of blockchain technology and its various applications, including smart contracts, decentralized finance, and cryptocurrency. I have worked on several blockchain projects, both as a developer and a consultant, and I am passionate about the transformative potential of this technology. I look forward to sharing my knowledge and expertise with others who are interested in blockchain.</p>
            <div className='btn-group'>
            
              <a href='/roadmap'>click</a>
              <log to="/roadmap">
                Login
                
              </log>
              <Router>
                <Routes>
                  <Route path="/roadmap" element={ <Roadmap/> } />
                </Routes>
              </Router>
              
          
            </div>
        </div>
        <div className="social">
          <a href="http://"><FaFacebookF /></a>
          <a href="http://"><FaTwitter /></a>
          <a href="http://"><FaInstagram /></a>
          <a href="http://"><SiLeetcode /></a>
          <a href="http://"><FaGithub /></a>
        </div>

    </section>
  )
}

export default Selfintro