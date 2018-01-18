import React, { Component } from 'react'
import { Row, Col, Pagination } from 'antd'
import { StyleSheet, css } from 'aphrodite'

import { Header, Line } from '../components/Components'

import bg from '../images/dtc-bg-contact.jpg'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Header title="Contact" props={bg}/>
        <section style={{height: '343px'}}>
          <Row type="flex">
            <Col lg={{span: 12}} md={{span: 12}} sm={{span: 12}}>
              <div style={{padding: '80px'}}>
                <div>
                  <div className="contact-contact-header">
                    <h3 style={{color: '#265990'}}>CONTACT US</h3>
                  </div>
                  <Line/>
                  <div className="contact-contact-parag">
                    <p style={{color: '#265990'}}>
                      Jl. A P Pettarani Komp. IDI 
                      Perum Pavilion Green Kav. G 
                      Makassar, Sulawesi Selatan 
                      90231
                      +62 8114456770, 
                      info@dtc.co.id</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{span: 12}} md={{span: 12}} sm={{span: 12}}>
              <div style={{padding: '80px'}}>
                <div>
                  <div className="contact-contact-header">
                    <h3 style={{color: '#265990'}}>CONTACT US</h3>
                  </div>
                  <Line/>
                  <div className="contact-contact-parag">
                    <p style={{color: '#265990'}}>
                      Jl. A P Pettarani Komp. IDI 
                      Perum Pavilion Green Kav. G 
                      Makassar, Sulawesi Selatan 
                      90231
                      +62 8114456770, 
                      info@dtc.co.id</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    )
  }
}

export default Contact