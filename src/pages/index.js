import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/content'
import 'bulma/bulma.sass'
import bulmaCarousel from 'bulma-carousel'
// import 'bulma-carousel/dist/css/bulma-carousel.sass'
import 'bulma-carousel/dist/js/bulma-carousel.min.js'

const IndexPage = () => (
  <Layout>
    <Content>
      <div className='carousel carousel-animated carousel-animate-slide'>
        <div className='carousel-container'>
          <div className='carousel-item has-background is-active'>
            <img className="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" width="640" height="310" />
            <div className="title">Merry Christmas</div>
          </div>
          <div className='carousel-item has-background'>
            <img className="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" width="640" height="310" />
            <div className="title">La Song Box</div>
          </div>
          <div className='carousel-item has-background'>
            <img className="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" width="640" height="310" />
            <div className="title">Sushi time</div>
          </div>
          <div className='carousel-item has-background'>
            <img className="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" width="640" height="310" />
            <div className="title">Life</div>
          </div>
        </div>
        <div className="carousel-navigation">
          <div className="carousel-nav-left">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div className="carousel-nav-right">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </Content>
  </Layout>
)

let setCarousel = () => {
  bulmaCarousel.attach();
}

console.log('test');
window.onload = setCarousel;

export default IndexPage
