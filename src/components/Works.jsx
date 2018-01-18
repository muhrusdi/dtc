import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd'
import { StyleSheet, css } from 'aphrodite'

import wscc from '../images/dtc-works-scc.jpg'

class Works extends Component {
  constructor(props) {
    super(props)
    this.state = {
      worksItem: [
        {
          title: 'Soppeng Command Center',
          image: wscc
        },
        {
          title: 'Kartu Macca Soppeng',
          image: wscc
        },
        {
          title: 'Metro-E Soppeng',
          image: wscc
        },
        {
          title: 'Aplikasi Panrita',
          image: wscc
        },
        {
          title: 'Website Desa Kabupaten Soppeng',
          image: wscc
        },
        {
          title: 'Sistem Absensi',
          image: wscc
        },
        {
          title: 'Sistem Parkir RSUD Latemmamale',
          image: wscc
        },
        {
          title: 'Mesin Antrian RSUD Latemmamala',
          image: wscc
        }
      ]
    }
  }
  render() {
    const styles = StyleSheet.create({
      overlay: {
        ':after': {
          position: 'absolute',
          left: '0',
          top: '0',
          right: '0',
          bottom: '0',
          content: '" "',
          background: 'rgba(0,0,0,0.7)',
          transition: 'background .3s ease'
        },
        ':hover': {
          ':after': {
            background: 'rgba(24, 144, 255, 0.72)'
          }
        }
      }
    })
    return (
      <div className="works">
        <Row type="flex" align="middle">
          {
            this.state.worksItem.map((item, i) => (
              <Col lg={{span: 6}} md={{span: 8}} sm={{span: 12}} xs={{span: 24}}>
                <div className={css(styles.overlay)} style={
                  {
                    background: `url("${item.image}") no-repeat`,
                    backgroundSize: 'cover',
                    height: '264px'
                  }
                }>
                  <div style={
                    {
                      padding: '50px',
                      fontSize: '29px',
                      fontWeight: 'bold'
                    }
                  }>
                    <p style={
                      {
                        color: '#fff', 
                        position: 'relative', 
                        zIndex: '30'
                      }
                    }>{item.title}</p>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
    )
  }
}

export default Works