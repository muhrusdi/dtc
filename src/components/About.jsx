import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd'
import { StyleSheet, css } from 'aphrodite/no-important'

import aboutImage from '../images/dtc-about-image.png'
import bgAboutImage from '../images/dtc-bg-about.png'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const styles = StyleSheet.create({
      bg: {
        padding: '60px 0', 
        background: `url("${bgAboutImage}") no-repeat`,
        backgroundSize: 'contain',
        backgroundPosition: 'right',
      }
    })
    return (
      <div className={"about-us " + css(styles.bg)}>
        <div className="container">
          <Row type="flex" align="middle">
            <Col lg={{span: 12}} md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
              <div>
                <div className="au-header">
                  <h3 style={{fontSize: '32px'}}>About Us</h3>
                </div>
                <div className="au-content" style={{paddingRight: '70px'}}>
                  <p>We will help you develop your ideas into reality. Whether it’s digital products to software development, network infrastructure to system integration, we got all your IT needs covered.</p>
                  <p>Our strength lies in combining technology with creative ability. We believe in highly functional products and passionate in delivering the best customer experience. We provide new opportunities, implement innovative solutions and facilitate business processes. We value the creation of long-term customer relations. Your success is our success.</p>
                </div>
                <div className="au-link">
                  <ul>
                    <li><a href="#">Read More</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col className="about-col-image" lg={{span: 12}} md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
              <div>
                <img style={{width: '100%'}} src={aboutImage} alt=""/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default About