import './App.css';
import { useEffect, useRef, useState } from "react";
import { Container, Form,Button } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="main-section">

      
        {/* --------------------open menu bar---------------- */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <img src={process.env.PUBLIC_URL + '/images/Chef-Matt-logo.png'} className='menu-logo'/>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href='#' className='links'>Home</a></li>
            <li><a href='#' className='links'>Products</a></li>
            <li><a href='#' className='links'>MEET CHEF MATT</a></li>
            <li><a href='#' className='links'>FAQ</a></li>
            <li><a href='#' className='links'>CONNECT WITH US</a></li>
          </ul>
          <div className='menu-footer'>
            <p>TEXT SUPPORT 24/7   <a href='tel:070-7782-9137'>070-7782-9137</a></p>
            <div className='wishlist-sec'>
              <a href='#' className='cart'><img src={process.env.PUBLIC_URL + '/images/Bag_alt.svg'} /> <span>Cart</span></a>
              <a href='#' className='cart'><img src={process.env.PUBLIC_URL + '/images/Favorite.svg'} /> <span>WISHLIST</span></a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>


      {/*---------------------- banner section slider------------------ */}
      <section className='home-banner'>

        {/* left Menu section */}
        <div className='menu-toggle' >
          <img onClick={handleShow}src={process.env.PUBLIC_URL + '/images/hamburger.svg'} className='menu-toogle-hs'/>
          <img src={process.env.PUBLIC_URL + '/images/Chef-Matt-logo.png'} className='menu-logo' />
        </div>

          <Carousel>
              <div className='banner-s'>
                  <img src={process.env.PUBLIC_URL + '/images/banner-image1.png'} className='banner-image' />
                  <a className='meet-btn' href='#'>Meet Chef Matt</a>
              </div>
              <div className='banner-s'>
                  <img src={process.env.PUBLIC_URL + '/images/banner-image2.jpg'} className='banner-image' />
                  <a className='meet-btn' href='#'>Meet Chef Matt</a>
              </div>
              <div className='banner-s'>
                  <img src={process.env.PUBLIC_URL + '/images/banner-image3.jpg'} className='banner-image' />
                  <a className='meet-btn' href='#'>Meet Chef Matt</a>
              </div>
          </Carousel>
      </section>


      {/*---------------------- Slider-section-------------------------- */}
      <section className='cheff-section'>
        <Container>
           <div className='inner-sec-cheff'>
              <h2>CHEF MATT PRODUCTS</h2>
              <div className='line'></div>
              <p>Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it yourself and Thank us later.</p>
           </div>

           <div className="slider-container">
            <Slider {...settings}>
              <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image1.png'} className='product' />
                  <h5>CINNAMON HONEY</h5>
                  <p><span>$12.00</span> $9.00</p>
              </div>
              <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image2.png'} className='product' />
                  <h5>COCONUT OIL</h5>
                  <p><span>$20.00</span> $15.00</p>
              </div>
              <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image3.png'} className='product' />
                  <h5>MANGO HONEY</h5>
                  <p><span>$9.00</span> $6.00</p>
              </div>
              <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image4.png'} className='product' />
                  <h5>HONEY HABANERO</h5>
                  <p><span>$9.00</span> $6.00</p>
                </div>
              <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image3.png'} className='product' />
                  <h5>MANGO HONEY</h5>
                  <p><span>$19.00</span> $16.00</p>
              </div>
              <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image4.png'} className='product' />
                  <h5>HONEY HABANERO</h5>
                  <p><span>$22.00</span> $20.00</p>
                </div>
            </Slider>
          </div>
            
            {/* <swiper-container class="mySwiper"  navigation="true" hash-navigation-watch-state="true"  pagination-clickable="true" space-between="30"
              slides-per-view="4" >
              <swiper-slide>
                <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image1.png'} className='product' />
                  <h5>CINNAMON HONEY</h5>
                  <p><span>$12.00</span> $9.00</p>
                </div>
              </swiper-slide>
             
              <swiper-slide>
                <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image2.png'} className='product' />
                  <h5>COCONUT OIL</h5>
                  <p><span>$20.00</span> $15.00</p>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image3.png'} className='product' />
                  <h5>MANGO HONEY</h5>
                  <p><span>$9.00</span> $6.00</p>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image4.png'} className='product' />
                  <h5>HONEY HABANERO</h5>
                  <p><span>$9.00</span> $6.00</p>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image3.png'} className='product' />
                  <h5>MANGO HONEY</h5>
                  <p><span>$9.00</span> $6.00</p>
                </div>
              </swiper-slide>
              s
              <swiper-slide>
                <div className='slider-contain'>
                  <img src={process.env.PUBLIC_URL + '/images/product-image4.png'} className='product' />
                  <h5>HONEY HABANERO</h5>
                  <p><span>$9.00</span> $6.00</p>
                </div>
              </swiper-slide>
             
            </swiper-container> */}
           

        </Container>
      </section>


      {/* ---------------------Online-section------------------ */}
      <section className='online-section'>
        <Container>
           <div className='oliner-slider'>
              <h3 className='heading text-center'>ONLINE ONLY <span className='lines'></span></h3>
              <Carousel>
                <div className='online-slider-im'>
                  <div className='inner-section'>
                    <p>GET 20% OFF YOUR ORDER OF $50 OR MORE<br/>
                        Use code <b>“Chef20”</b>
                    </p>
                    <a href='#' className='shop-now'>Shop Now</a>
                  </div>
                </div>
                <div className='online-slider-im'>
                  <div className='inner-section'>
                    <p>GET 50% OFF YOUR ORDER OF $50 OR MORE<br/>
                        Use code <b>“Chef50”</b>
                    </p>
                    <a href='#' className='shop-now'>Shop Now</a>
                  </div>
                </div>
                <div className='online-slider-im'>
                  <div className='inner-section'>
                    <p>GET 50% OFF YOUR ORDER OF $50 OR MORE<br/>
                        Use code <b>“Chef50”</b>
                    </p>
                    <a href='#' className='shop-now'>Shop Now</a>
                  </div>
                </div>
              </Carousel>
           </div>
        </Container>
        {/* style={{background:`url(${process.env.PUBLIC_URL + "/images/deal_1.png"})no-repeat`}} */}
      </section>

      {/* ------------------Signup section ------------------------*/}
      <section className='signup-section'>
        <Container>
            <div className='signup-mai'>
              <div className='signup-inner'>
                <h2 className='m-heading'>SIGN UP SPECIAL PROMOTIONS</h2>
                <p>Get exclusive deals you won’t find anywhere else straight to your inbox!</p>
                <Form>
                  <div className='input-group'>
                    <input className='form-control' placeholder='Enter email address'/>
                    <button className='button-ty'>Subscribe</button>
                  </div>
                </Form>
              </div>
           </div>
        </Container>
      </section>

      {/* --------------------help section -------------------------- */}
      <section className='help-section'>
        <Container>
           <div className='help-inner'>
              <div className='help-on'>
                <img src={process.env.PUBLIC_URL + '/images/home.svg'} className="h-logo" alt="logo" />
                <div className='left-sec'>
                  <p className='uppercase-text'>FREE SHIPPING WORLDWIDE</p>
                  <p className='small-text'>Guaranteed Delivery</p>
                </div>
              </div>
              <div className='help-on'>
                <img src={process.env.PUBLIC_URL + '/images/headphone.svg'} className="h-logo" alt="logo" />
                <div className='left-sec'>
                  <p className='uppercase-text'>24/7 CUSTOMER SERVICE</p>
                  <p className='small-text'>Text Us 24/7 at 070-7782-9137</p>
                </div>
              </div>
              <div className='help-on'>
                <img src={process.env.PUBLIC_URL + '/images/check.svg'} className="h-logo" alt="logo" />
                <div className='left-sec'>
                  <p className='uppercase-text'>QUALITY GUARANTEE!</p>
                  <p className='small-text'>Send Within 30 Days</p>
                </div>
              </div>
           </div>
        </Container>
      </section>

      {/* ------------------- footer -------------------------- */}

      <div className='footer'>
        <footer className='App-footer'>
          <img src={process.env.PUBLIC_URL + '/images/Chef-Matt-logo.png'} className="f-logo" alt="logo" />
        </footer>
      </div>
    </div>
  );
}

export default App;
