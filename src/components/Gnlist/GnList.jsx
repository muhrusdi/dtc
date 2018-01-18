import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { globalnavToggle } from '../../actions'
import { connect } from 'react-redux'
import { Row, Col, Dropdown, Menu, Icon } from 'antd'
import 'antd/lib/dropdown/style/css'
import { StyleSheet, css } from 'aphrodite'

const scale = {
  from: {
    transform: 'scale(1.1)',
    opacity: '0'
  },
  to: {
    transform: 'scale(1)',
    opacity: '1'
  }
}

const keyframe = StyleSheet.create({
  gnAnimate: {
    animationDelay: '4s',
    animation: 'scale 1s both',
    animationName: scale,
    transitionDelay: '3s'
  }
})

const menuDopdown = (items) => (
  <Menu>
    {
      items.map((item, i) => (
        <Menu.Item key="0">
          <a href={item.link}>{item.title}</a>
        </Menu.Item>
      ))
    }
  </Menu>
)

@connect((store) => {
  return {
    toggle: store.globalnav.toggle
  }
})

export class GnList extends Component {
  constructor(props) {
    super(props)
    this.hiddenAfterClick = this.hiddenAfterClick.bind(this)
  }

  hiddenAfterClick() {
    if (this.props.toggle) {
      setTimeout(() => {
        this.props.dispatch(globalnavToggle(false))
        document.body.classList.remove('gn-noscroll')
      }, 200);
    }

  }

  render() {
    return (
      <Row className="gn-list" type="flex" justify="space-between">
        <Col className="visible-large visible-medium hidden-small hidden-xsmall"><a href="#"><img className="logo" src={this.props.props.dtcLogo} alt=""/></a></Col>
        {
          this.props.props.menu.map((item, i) => (
            item.submenu != undefined ?
              <Col className={css(keyframe.gnAnimate)} style={{animationDelay: `${3*i}s`,transform: 'scale(1.1)'}}>
                <Dropdown overlay={menuDopdown(item.submenu)} trigger={['click']}>
                  <a ref={'active'} className="ant-dropdown-link" href="#">
                    SERVICES <Icon type="down" />
                  </a>
                </Dropdown>
              </Col>
              :
              <Col className={css(keyframe.gnAnimate)} style={{animationDelay: `${3*i}s`,transform: 'scale(1.1)'}}><NavLink exact={item.exact} to={item.link} activeClassName="gn-active" onClick={this.hiddenAfterClick}>{item.title}</NavLink></Col>
          ))
        }
        <Col className="visible-large hidden-xsmall"><button onClick={this.props.gnToggle ? this.props.gnToggle.bind(this) : null }><img className="search" src={this.props.props.searchIcon} /></button></Col>
      </Row>
    )
  }
}
