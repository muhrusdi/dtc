import React, { Component } from 'react'
import { Row, Col, Layout, Carousel } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import Typist from 'react-typist'
import 'antd/lib/carousel/style/css'
import imageSlide1 from '../images/dtc-image-slide1.png'
import imageSlide2 from '../images/dtc-image-slide2.png'

class Slideshow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [
        {
          title: 'We Design. We Develop. We Integrat.',
          link: 'http',
          image: imageSlide1,
          bgColor: '#DBFDEC'
        },
        {
          title: 'DOCOTEL TEKNOLOGI CELEBES, WE ARE DIGITAL CREATIVE AGENCY',
          link: 'http',
          image: imageSlide2,
          bgColor: '#01EFFC'
        }
      ]
    }
  }

  render() {
    return (
      <Carousel autoplaySpeed="9000" speed="2000" autoplay className="main-slider">
        {
          this.state.slides.map((item, i) => (
            <div style={{background: item.bgColor}}>
              <Row type="flex" align="middle">
                <Col xl={{span: 12}} lg={{span: 12}} md={{span: 10}} sm={{span: 8}} xs={{span: 24}}>
                  <div>
                    <img src={item.image} alt=""/>
                  </div>
                </Col>
                <Col xl={{span: 12}} lg={{span: 12}} md={{span: 14}} sm={{span: 16}} xs={{span: 24}}>
                  <div style={{padding: '0 50px'}}>
                    <Typist  cursor={{hideWhenDone: true}} stdTypingDelay={200} startDelay={2000}>
                      <Typist.Delay ms={2000*i} />
                      <Typist.Backspace count={4} delay={600} />
                      <h1>{item.title}</h1>
                    </Typist>
                  </div>
                </Col>
              </Row>
            </div>
          ))
        }
      </Carousel>
    )
  }
}

export default Slideshow