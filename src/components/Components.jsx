import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export const Header = (props) => {
  const bgHeader = StyleSheet.create({
    bg: {
      height: '400px',
      position: 'relative',
      ':after': {
        background: `url("${props.props}") no-repeat center center`,
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        content: '""',
        backgroundSize: 'cover',
        zIndex: '1'
      },
      ':before': {
        background: `rgba(0,0,0,.4)`,
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        content: '""',
        zIndex: '2'
      }
    }
  })

  return (
    <section className={"blog-header " + css(bgHeader.bg)}>
    <div className="container">
      <h1 style={
        {
          position: 'relative', 
          zIndex: '20', 
          color: '#fff',
          lineHeight: '8',
          fontSize: '50px',
          textAlign: 'center'
        }
      }>{props.title}</h1>
    </div>
  </section>
  )
}

export const Line = () => (
  [
    <div className="line-blue" style={
      {
        height: '3px',
        width: '70px',
        background: '#265990',
        marginBottom: '15px'
      }
    }></div>,
    <div className="line-orange" style={
      {
        height: '3px',
        width: '100px',
        background: '#ED8325',
        marginBottom: '20px'
      }
    }></div>
  ]
)