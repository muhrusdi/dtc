import React, { Component } from 'react'
import Slideshow from '../components/Slideshow'
import About from '../components/About'
import Services from '../components/Services'
import Works from '../components/Works'

class Home extends Component {
  render() {
    return [
      <Slideshow/>,
      <About/>,
      <Services/>,
      <Works/>
    ]
  }
}

export default Home