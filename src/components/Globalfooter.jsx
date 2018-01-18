import React, { Component } from 'react'
import { Row, Col, Layout, Input } from 'antd'
import 'antd/lib/row/style/css'
import 'antd/lib/input/style/css'
import logo from '../images/dtc-logo-footer.png'
import fb from '../images/dtc-fb-icon.png'
import ig from '../images/dtc-ig-icon.png'
import tw from '../images/dtc-tw-icon.png'
import yt from '../images/dtc-yt-icon.png'
import lk from '../images/dtc-in-icon.png'

const Search = Input.Search

const { Content } = Layout

class Globalfooter extends Component {
  render() {
    return (
      <footer id="globalfooter" className="globalfooter">
        <div className="container">
          <Content>
            <div className="gf-header">
              <h1>Upgrade You</h1>
            </div>
            <Row type="flex" className="gf-content" style={{paddingTop: '50px'}}>
              <Col lg={{span: 8}} md={{span: 8}} sm={{span: 24}}>
                <div>
                  <div className="gfc-header">
                    <h5>Makassar Office (Headquarter)</h5>
                  </div>
                  <ul>
                    <li><p>+62 8114456770</p></li>
                    <li><p>Jl. A P Pettaranu Komp. IDI Perum</p></li>
                    <li><p>Pavilion Green Kav. G. Makassar</p></li>
                    <li><p>Sulawesi Selatan 90231</p></li>
                  </ul>
                </div>
              </Col>
              <Col lg={{span: 8}} md={{span: 8}} sm={{span: 24}}>
                <div>
                  <div className="gfc-header">
                    <h5>Sopping Office</h5>
                  </div>
                  <ul>
                    <li><p>+62 8114456770</p></li>
                    <li><p>Jl. Baka'e Lakkita, Kec. Lalabata</p></li>
                    <li><p>Kabupaten Soppeng</p></li>
                    <li><p>Sulawesi Selatan 90812</p></li>
                  </ul>
                </div>
              </Col>
              <Col lg={{span: 8}} md={{span: 8}} sm={{span: 24}}>
                <div>
                  <div className="gfc-header">
                    <h5>Subscribing</h5>
                  </div>
                  <div>
                    <form action="">
                      <Search placeholder="hello@creativedas.sh" enterButton="Send" size="large" />
                    </form>
                  </div>
                  <div className="gfc-header" style={{paddingTop: '27px'}}>
                    <h5>Follow Us</h5>
                  </div>
                  <div className="gf-link">
                    <ul>
                      <li><a href="#"><img src={fb} alt=""/></a></li>
                      <li><a href="#"><img src={tw} alt=""/></a></li>
                      <li><a href="#"><img src={ig} alt=""/></a></li>
                      <li><a href="#"><img src={yt} alt=""/></a></li>
                      <li><a href="#"><img src={lk} alt=""/></a></li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="gf-footer" style={
                {
                  marginTop: '33px',
                  borderTop: '1px solid #b4b4b4',
                  paddingTop: '13px',
                }
              }>
              <Row type="flex" justify="space-between" align="middle">
                <Col>
                  <small>Copyright © PT. Docotel Teknologi Celebes. All rights reserved.</small>
                </Col>
                <Col>
                  <small><img style={{height: '43px'}} src={logo} alt=""/></small>
                </Col>
              </Row>
            </div>
          </Content>
        </div>
      </footer>
    )
  }
}

export default Globalfooter