import React, { Component } from 'react'
import { Row, Col, Pagination } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'

import { Header } from '../components/Components'

import 'antd/lib/row/style/css'
import 'antd/lib/pagination/style/css'
import bg from '../images/dtc-bg-blog.jpg'
import bgBlog1 from '../images/dtc-example1.jpg'
import bgBlog2 from '../images/dtc-example2.jpg'


class Blogs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      blogsPerPage: 3,
      blogItems: [
        {
          id: '',
          path: 'lorem-ipsum-is-simply-dummy-text',
          title: 'Lorem ipsum is simply dummy text.',
          text: 'Our work varies, from digital products to software development, network infrastructure to system integration. With our excellent strategic approach',
          date: 'Desember 2, 2017',
          image: bgBlog2,
          author: 'Muhammad Rusdi'
        },
        {
          id: '',
          path: 'lorem-ipsum-is-simply-dummy-text-2',
          title: 'Lorem ipsum is simply dummy text 2.',
          text: 'Our work varies, from digital products to software development, network infrastructure to system integration. With our excellent strategic approach',
          date: 'Desember 2, 2017',
          image: bgBlog2,
          author: 'Muhammad Rusdi'
        },
        {
          id: '',
          path: 'lorem-ipsum-is-simply-dummy-text-3',
          title: 'Lorem ipsum is simply dummy text 3.',
          text: 'Our work varies, from digital products to software development, network infrastructure to system integration. With our excellent strategic approach',
          date: 'Desember 2, 2017',
          image: bgBlog2,
          author: 'Muhammad Rusdi'
        },
        {
          id: '',
          path: 'lorem-ipsum-is-simply-dummy-text-4',
          title: 'Lorem ipsum is simply dummy text. 4',
          text: 'Our work varies, from digital products to software development, network infrastructure to system integration. With our excellent strategic approach',
          date: 'Desember 2, 2017',
          image: bgBlog2,
          author: 'Muhammad Rusdi'
        },
        {
          id: '',
          path: 'lorem-ipsum-is-simply-dummy-text-5',
          title: 'Lorem ipsum is simply dummy text 5.',
          text: 'Our work varies, from digital products to software development, network infrastructure to system integration. With our excellent strategic approach',
          date: 'Desember 2, 2017',
          image: bgBlog2,
          author: 'Muhammad Rusdi'
        }
      ]
    }
    this.pagination = this.pagination.bind(this)
  }

  pagination(pageNumber) {
    this.setState({
      currentPage: Number(pageNumber)
    })
  }

  render() {

    const { blogItems, currentPage, blogsPerPage } = this.state
    const indexOfLastTodo = currentPage * blogsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - blogsPerPage;
    const currentBlogs = blogItems.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(blogItems.length / blogsPerPage); i++) {
      pageNumbers.push(i);
    }

    const bgHeader = StyleSheet.create({
      bgBlog: {
        background: `url("${bgBlog1}") no-repeat`,
        backgroundSize: 'cover',
        height: '340px'
      },
      bgBlog2: {
        background: `url("${bgBlog2}") no-repeat`,
        backgroundSize: 'cover',
        height: '252px'
      }
    })
    const styles = {
      bcHeader: {
        textAlign: 'center',
        textAlign: 'center',
        padding: '31px 37px',
        color: '#265990'
      },
      styleFooter: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
        display: 'flex',
        fontSize: '12px',
        color: '#787878'
      },
      button: {
        padding: '7px 20px',
        background: '#265990',
        color: '#fff',
        borderRadius: '3px'
      }
    }
    return (
      <div className="blogs">
        <Header title="Blog" props={bg}/>
        <section className="blog-content">
          <div className="bc-header">
            <div className="container">
              <div style={styles.bcHeader}>
                <h2 style={{color: '#265990', fontWeight: 'bold', fontSize: '40px'}}>Popular Blog</h2>
                <p>Lorem ipsum is simply dummy text of the priting and types...</p>
              </div>
            </div>
          </div>
          <div className="bc-top" style={{paddingBottom: '80px'}}>
            <div className="container">
              <Row type="flex" align="top">
                <Col lg={{span: 12}} sm={{span: 12}} xs={{span: 24}}>
                  <div style={{paddingRight: '44px'}}>
                    <div className={css(bgHeader.bgBlog)}></div>
                  </div>
                </Col>
                <Col lg={{span: 12}} sm={{span: 12}} xs={{span: 24}}>
                  <div>
                    <div className="bc-top-header">
                      <div>
                        <h3 style={
                          {
                            color: '#00579e',
                            fontSize: '24px'
                          }
                        }>Lorem ipsum is simply dummy text</h3>
                        <div className="line-blue" style={
                          {
                            height: '3px',
                            width: '70px',
                            background: '#265990',
                            marginBottom: '15px'
                          }
                        }></div>
                        <div className="line-orange" style={
                          {
                            height: '3px',
                            width: '100px',
                            background: '#ED8325',
                            marginBottom: '20px'
                          }
                        }></div>
                      </div>
                    </div>
                    <div>
                      <p style={{fontSize: '14px'}}>Our work varies, from digital products to software development, network infrastructure to system integration. With our excellent strategic approach, we always ensure to deliver the best customer experience to our clients.</p>
                    </div>
                    <div className="bc-top-footer">
                      <ul style={styles.styleFooter}>
                        <li><p>Desember 2, 2018 | Muhammad Rusdi</p></li>
                      </ul>
                    </div>
                    <div style={{marginTop: '18px'}}>
                      <a style={styles.button} href="#">Read More</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="bc-bottom">
            <div className="container">
              <div style={{marginLeft: '-10px', marginRight: '-10px'}}>
                <Row>
                  {
                    currentBlogs.map((item, i) => (
                      <Col xl={{span: 8}} lg={{span: 8}} sm={{span: 8}} xs={{span: 24}}>
                        <Link to={`/blogs/${item.path}`} className="bc-bottom-link" href="" style={{padding: '10px', display: 'block'}}>
                          <div className="image-header">
                            <div className={css(bgHeader.bgBlog2)}></div>
                          </div>
                          <div className="line-blue" style={
                              {
                                height: '3px',
                                width: '70px',
                                background: '#265990',
                                marginTop: '21px'
                              }
                            }></div>
                          <div className="title" style={{padding: '11px 0'}}>
                            <h4>{item.title}</h4>
                          </div>
                          <div className="line-orange" style={
                              {
                                height: '3px',
                                width: '100px',
                                background: '#ED8325',
                                marginBottom: '20px'
                              }
                            }></div>
                          <div className="content">
                            <p style={{fontSize: '14px', color: '#333'}}>{item.text}</p>
                          </div>
                          <div className="bcb-footer">
                            <ul style={styles.styleFooter}>
                              <li><p>{item.date} | {item.author}</p></li>
                            </ul>
                          </div>
                        </Link>
                      </Col>
                    ))
                  }
                </Row>
              </div>
              <div>
                <div style={{textAlign: 'center', padding: '42px 0'}}>
                  <Pagination defaultCurrent={1} total={blogItems.length} defaultPageSize={3} onChange={this.pagination}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Blogs