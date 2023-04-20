import React from 'react'
import '../App.css'
const Navbar = () => {
  return (
    <header class="header">
        <a href="#" class="logo">Web<span>3</span>journey</a>
        <nav className="navbar">
        <a href="#intro">self intro</a>
            <a href="#web3">web <span>3</span></a>
            <a href="#roadmap">roadmap</a>
            <a href="#nfts">nfts</a>
            <a href="#assets">assets</a>
            <a href="#future">The Future</a>
        </nav>
    </header>
  )
}

export default Navbar