import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import LinesEllipsis from 'react-lines-ellipsis'

import bgBlog1 from '../images/dtc-example1.jpg'
import { Line } from '../components/Components'

class DetailBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogSideItem: [
        {
          title: 'Our work varies, from digital products to software development, network infrastructure to system integration.',
          image: bgBlog1,
          link: ''
        },
        {
          title: 'Our work varies, from digital products to software development, network infrastructure to system integration.',
          image: bgBlog1,
          link: ''
        },
        {
          title: 'Our work varies, from digital products to software development, network infrastructure to system integration.',
          image: bgBlog1,
          link: ''
        }
      ]
    }
  }
  render() {
    const { blogSideItem } = this.state
    return (
      <div className="detail-blog" style={{padding: '50px 0'}}>
        <div className="container">
          <Row type="flex" gutter={25}>
            <Col lg={{span: 19}} md={{span: 19}} sm={{span: 24}} style={
                {
                  borderRight: '1px solid #eaeaea'
                }
              }>
              
              <div className="db-left">
                <div className="db-left-header" style={{paddingBottom: '30px'}}>
                  <h2 style={{color: '#265990'}}>Lorem ipsum is simply dummy text</h2>
                </div>
                <Row type="flex" gutter={16}>
                  <Col lg={{span: 6}} className="visible-large hidden-small hidden-xsmall">
                    <div>
                      <Line/>
                      <h3 style={{fontSize: '14px'}}>Our work varies, from digital products to software development, network infrastructure to system integration.</h3>
                    </div>
                  </Col>
                  <Col lg={{span: 18}} sm={{span: 24}}>
                    <div>
                      <div className="image">
                        <img style={{width: '100%'}} src={bgBlog1} alt=""/>
                      </div>
                      <div className="content" style={{paddingTop: '34px'}}>
                        <p>One stop IT Procurement services for your
                        whole IT infrastructure such as network
                        solution, data center, security system,
                        system integration with high quality
                        performance.
                        </p>
                      </div>
                      <div className="date-author">
                        <p style={
                          {
                            fontSize: '14px',
                            color: '#9c9c9c'
                          }
                        }>Desember 2, 2018 | Muhammad Rusdi</p>
                      </div>
                      <div className="share">
                        <ul>
                          <li><p style={
                            {
                              background: '#989898',
                              color: '#fff',
                              padding: '2px 16px',
                              fontSize: '14px'
                            }
                          }>Share</p></li>
                          <li><a style={
                            {
                              background: '#1996d1',
                              color: '#fff',
                              padding: '2px 16px',
                              fontSize: '14px',
                              display: 'block'
                            }
                          } href="#"><Icon type="twitter" /></a></li>
                          <li><a style={
                            {
                              background: '#1c51a2',
                              color: '#fff',
                              padding: '2px 16px',
                              fontSize: '14px',
                              display: 'block'
                            }
                          } href="#"><Icon type="facebook" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={{span: 5}} md={{span: 5}} sm={{span: 24}} xs={{span: 24}}>
              <div className="db-right">
                <div style={{paddingBottom: '30px'}}>
                  <p style={{color: '#265990', paddingTop: '8px'}}>Related Blogs</p>
                </div>
                <div className="db-right-content">
                  <ul style={
                    {
                      listStyle: 'none',
                      margin: '0',
                      padding: '0'
                    }
                  }>
                    <Row type="flex" gutter={16}>
                    {
                      blogSideItem.map((item, i) => {
                          let styles = StyleSheet.create({
                            bg: {
                              display:' block',
                              position: 'relative',
                              height: '200px',
                              boxSizing: 'border-box',
                              marginBottom: '20px',
                              ':after': {
                                background: `url(${bgBlog1}) no-repeat center center`,
                                position: 'absolute',
                                left: '0',
                                right: '0',
                                top: '0',
                                bottom: '0',
                                content: '""'
                              }
                            }
                          })
                          return (
                              <Col lg={{span: 24}} md={{span: 24}} sm={{span: 8}} xs={{span: 8}}>
                                <a href="#" className={css(styles.bg)}>
                                  <div className="drc-title" style={
                                    {
                                      position: 'absolute',
                                      zIndex: '10',
                                      padding: '10px 6px',
                                      background: 'rgba(255,255,255, .7)',
                                      bottom: '0',
                                      left: '0',
                                      right: '0'
                                    }
                                  }>
                                    <div className="line-blue" style={
                                      {
                                        height: '3px',
                                        width: '70px',
                                        background: '#265990',
                                        marginBottom: '6px'
                                      }
                                    }></div>
                                    <h4 style={{color: '#265990', fontSize: '14px'}}>
                                      <LinesEllipsis text={`${item.title}`} maxLine='2' ellipsis='...' trimRight basedOn='letters'/>
                                    </h4>
                                    <div className="line-orange" style={
                                      {
                                        height: '3px',
                                        width: '100px',
                                        background: '#ED8325'
                                      }
                                    }></div>
                                  </div>
                                </a>
                              </Col>

                          )
                      })
                    }
                    </Row>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default DetailBlog
