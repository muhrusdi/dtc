import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import Media from 'react-media'
import { GnList } from './Gnlist/GnList'
import { connect } from 'react-redux'
import 'antd/lib/row/style/css'
import dtcLogo from '../images/dtc-logo.png'
import searchIcon from '../images/dtc-search.png'
import toggleNavIcon from '../images/dtc-toggle-nav.png'
import { globalnavToggle, globalnavToggleSearch } from '../actions'

const { Content } = Layout

const GnSearchView = () => (
  <div className="gn-search-view">
    <form action="">
      <div className="gn-search-wrapper">
        <input type="text" placeholder="Search"/>
      </div>
    </form>
  </div>
)

@connect((store) => {
  console.log('tesssss',store)
  return {
    toggle: store.globalnav.toggle,
    toggleSearch: store.globalnav.toggleSearch
  }
})

class Globalnav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [
        {
          title: 'HOME',
          link: '/',
          exact: true
        },
        {
          title: 'SERVICES',
          link: '/services',
          submenu: [
            {
              title: 'IT SOLUTION',
              link: 'http://blabla.com'
            },
            {
              title: 'CREATIVE DESIGN',
              link: 'http://blabla.com'
            },
            {
              title: 'IT PROCUREMENT',
              link: 'http://blabla.com'
            },
            {
              title: 'SYSTEM INTEGRATION',
              link: 'http://blabla.com'
            }
          ]
        },
        {
          title: 'HOW WE DO',
          link: '/how-we-do',
        },
        {
          title: 'WORKS',
          link: '/works',
        },
        {
          title: 'JOIN US',
          link: '/join-us',
        },
        {
          title: 'BLOG',
          link: '/blog',
        },
        {
          title: 'ABOUT US',
          link: '/about-us',
        }
      ]
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize(e) {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.props.dispatch(globalnavToggle(false))
      }
    })
  }

  toggleNav() {
    this.props.dispatch(globalnavToggle(!this.props.toggle))
    !this.props.toggle ?
    document.body.classList.add('gn-noscroll') : document.body.classList.remove('gn-noscroll')
  }

  toggleSearch() {
    this.props.dispatch(globalnavToggleSearch(!this.props.toggleSearch))
  }

  componentDidMount() {
    document.body.classList.toggle('gn-noscroll', this.props.toggle)
  }

  componentWillUnmount() {
    document.body.classList.remove('gn-noscroll')
  }

  componentWillMount() {
    this.handleResize()
  }

  render() {
    const { menu } = this.state
    const { toggle, toggleSearch } = this.props
    return [
      <nav id="globalnav" className="globalnav" style={ (toggle) ? {height: '100%'} : {} }>
        <Content className="container">
          <Media query="(max-width: 768px)">
            { matches =>
              matches ? [
                <Row className="gn-head" type="flex" justify="space-between">
                  <Col><a href="#"><img className="logo" src={dtcLogo} alt=""/></a></Col>
                  <Col>
                    <Row type="flex">
                      <Col><button onClick={this.toggleSearch.bind(this)}><img className="search" src={searchIcon} /></button></Col>
                      { toggleSearch ? <GnSearchView/> : null }
                      <Col><button onClick={this.toggleNav}><img className="search" src={toggleNavIcon} /></button></Col>
                    </Row>
                  </Col>
                </Row>,
                toggle ? (
                  <GnList props={{menu: menu, dtcLogo: dtcLogo, searchIcon: searchIcon}}/>
                ) : (
                  null
                )
               ] : [
                <GnList gnToggle={this.toggleSearch.bind(this)} props={{menu: menu, dtcLogo: dtcLogo, searchIcon: searchIcon}}/>,
                toggleSearch ? (
                  <GnSearchView/>
                ) : (
                  null
                )
               ]
            }
          </Media>
        </Content>
      </nav>,
      <div className="globalnav-placeholder"></div>
    ]
  }
}

export default Globalnav
