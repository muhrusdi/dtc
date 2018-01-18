import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, hashHistory } from 'react-router-dom'
import Globalnav from '../components/Globalnav'
import Globalfooter from '../components/Globalfooter'

import Home from '../components/Home'
import Blog from '../components/Blogs'
import Contact from '../components/Contact'
import DetailBlog from '../components/DetailBlog'

import '../scss/app'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/services',
    component: () => <h1>services</h1>
  },
  {
    path: '/how-we-do',
    component: () => <h1>Ho we do</h1>
  },
  {
    path: '/works',
    component: () => <h1>works</h1>
  },
  {
    path: '/join-us',
    component: DetailBlog
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/about-us',
    component: Contact
  },
  {
    path: '/blogs/:id',
    component: DetailBlog
  }
]

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <div>
          <Globalnav/>
          <Switch>
            {
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))
            }
          </Switch>
          <Globalfooter/>
        </div>
      </Router>
    )
  }
}

export default App