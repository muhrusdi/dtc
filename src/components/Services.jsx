import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd'
import { StyleSheet, css } from 'aphrodite'

import imageItSolution from '../images/dtc-it-solution-image.jpg'
import creativeDesign from '../images/dtc-cd-image.jpg'
import takeALook from '../images/dtc-takealook.jpg'
import si from '../images/dtc-si-image.jpg'
import ip from '../images/dtc-ip-image.jpg'

class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {
      servicesItem: [
        {
          title: 'It Solution',
          text: 'We provide one stop IT Solution services from concepting until production for Website, Software, & Mobile Development.',
          image: imageItSolution,
          link: ''
        },
        {
          title: 'Creative Design',
          text: 'We can design and build all your creative needs. We always ensure our clients satifisfied with our creative and strategic approach with passion for excellent customer experience.',
          image: creativeDesign,
          link: ''
        },
        {
          title: 'It Procurement',
          text: 'One stop IT Procurement services for your whole IT infrastructure such as network solution, data center, security system, system integration with high quality performance.',
          image: ip,
          link: ''
        },
        {
          title: 'System Integration',
          text: 'We ensure your entire IT system function properly with our consulting and project management services with our excellent strategic approach. Our goal is to deliver the best customer experience for our clients.',
          image: si,
          link: ''
        },
        {
          title: 'Take a Look at Our Great Works',
          text: 'Our work varies, from digital products to software development, network infrastructure to system integration. With our excellent strategic approach, we always ensure to deliver the best customer experience to our clients.',
          image: takeALook,
          link: ''
        }
      ]
    }
  }
  render() {
    const styles = {
      paddingCol: {
        padding: '50px'
      }
    }

    const media = StyleSheet.create({
      small: {
        '@media only screen and (max-width: 992px)': {
          textAlign: 'right'
        }
      }
    })
    return (
      <div className="services">
        <Row type="flex" align="middle">
          {
            this.state.servicesItem.map((item, i) => (
              i % 2 == 0 ? 
              [
                <Col lg={{span: 12}} sm={{span: 6}}>
                  <div>
                    <div style={
                      {
                        background: `url("${item.image}") no-repeat`,
                        backgroundSize: 'cover',
                        height: '400px'
                      }
                    }>

                    </div>
                  </div>
                </Col>,
                <Col lg={{span: 12}} sm={{span: 18}}>
                  <div style={styles.paddingCol}>
                    <h1>{item.title.toUpperCase()}</h1>
                    <p>{item.text}</p>
                    <a href={item.link}>Explore {item.title}</a>
                  </div>
                </Col>
              ]
               :
              [
                <Col lg={{span: 12}} sm={{span: 18}}>
                  <div style={styles.paddingCol} className={css(media.small)}>
                    <h1>{item.title.toUpperCase()}</h1>
                    <p>{item.text}</p>
                    <a href={item.link}>Explore {item.title}</a>
                  </div>
                </Col>,
                <Col lg={{span: 12}} sm={{span: 6}}>
                  <div>
                    <div style={
                      {
                        background: `url("${item.image}") no-repeat`,
                        backgroundSize: 'cover',
                        height: '400px'
                      }
                    }>
                    </div>
                  </div>
                </Col>
              ]
            ))
          }
        </Row>
      </div>
    )
  }
}

export default Services