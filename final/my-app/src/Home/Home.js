import React from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
import HomeLilac from '../HomeLilac/HomeLilac'
import HomeBags from '../HomeBags/HomeBags'
// import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


// import './styles.css';

// import required modules
import { Pagination,FreeMode,Navigation,A11y  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Home.css'
import img1 from "../image/furniture.jpg"
import img2 from "../image/3.jpeg"
// import img3 from "./image/fit.jpg"
function Home() {
    return (
        <>
            <section>
                <div className='front'>

                    <div className='over'>
                        <p className='main'>You have Your summer Vication</p>
                        <button className='main'>shop now</button>
                    </div>
                </div>
            </section>

            <section>
                <h1 className='sh'><b>TRENDING ARTICLES</b></h1>
            </section>

            <section>
                <div className='same'>
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">FASHION</h5>
                            <p className="card-text">3 sustainble deisgn zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
                        </div>

                    </div>

                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div>
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div>
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div>


                </div>
            </section>

            <section>
                <div className='mor'>
                    <h2><b>TOP CATAGORIES</b></h2>
                </div>
            </section>



            <section>
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={img2} alt="..." />
                            <img src={img2} alt="..." />
                            <img src={img2} alt="..." />
                            <img src={img2} alt="..." />

                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={img2} alt="..." />
                            <img src={img2} alt="..." />
                            <img src={img2} alt="..." />
                            <img src={img2} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} alt="..." />
                            <img src={img2} alt="..." />
                            <img src={img2} alt="..." />
                            <img src={img2} alt="..." />
                        </div>
                    </div>
                    <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section>
                <div className='adding'>
                   
                   <div className='fine'>

                    <p className='kill'>ALL About Miluao</p>
                    <p  className='loop'>Discover now</p>
                    <div className='solute'>
                 <Swiper
        
        modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        <SwiperSlide> <div class="tag"  id='change'>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-main">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide> <div class="tag" id='change'>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-main">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide> <div class="tag" id='change'>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-main">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide> <div class="tag" id='change'>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-main">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide> <div class="tag" id='change'>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-main">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide> <div class="tag" id='change'>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-main">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide> <div class="tag" id='change'>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-main">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide> <div class="tag" id='change'>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-main">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide> <div class="tag" id='change'>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-main">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       
                            </div>
                        </div></SwiperSlide>
      </Swiper>
                    </div>
                   </div>
                   
                </div>
            </section>


            <section>
                <div className='set'>
                    <div className='ass'>
                        <p>summer esstenial 2023</p>
                        <button>Discover</button>
                    </div>
                </div>
            </section>

            <section>
                <div className='man'>
                    <h1><b>HOT:LILAC</b></h1>
                </div>
            </section>

            <section>

            <div className='must'>
                <HomeLilac/>
            </div>
               {/* <div className='level'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div class="share">
                            <img src={img1} class="sure" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="share">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="share">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="share">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div class="share">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-point">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div class="share">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-point">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div class="share">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-point">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div class="share">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-point">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div class="share">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-point">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         
                        </div>
                    </div></SwiperSlide>
                </Swiper>

                </div> */}

            </section>
            <section>
                <div className='one'>
                    <div className='two'>
                        <p>Trest Yourself to the trendiest Premium styles</p>
                        <button>Discover</button>
                    </div>
                </div>
            </section>


            <section>
                {/* <div className='extra'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>


                </div>
            </section>

            <section>
                <div className='same'>
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div>

                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div>
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div>
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div>


                </div>
            </section>

            <section>
                <div className='one'>
                    <div className='two'>
                        <p>Trest Yourself to the most Exclusive luxury item</p>
                        <button>Discover</button>
                    </div>
                </div>
            </section>

            <section>
                <div className='pure'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>


                </div> */}
                <HomeSlider/>
            </section>

            <section>
                <div className='stud'>
                    <h1>HOT:OVERSIZED BAGS</h1>
                </div>
            </section>


            <section>
                {/* <div className='classify'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>


                </div> */}
                <div className='long'>
                    <HomeBags/>
                </div>
            </section>

            <section>

                <div className='fill'>
                    
                    <div className='box'>
                    <div className='value'>
                        <p  className='pick'>Your Guide to all things Fashion, Beauty, and Lifestyle</p>
                        <p>Be the first to know about hottest products, sales and special offers from Stylight's best retailers and brands</p>
                    </div>

                  <div className='in'>
                    <input type='text' name='value' placeholder='Full name'></input>
                    <input type='text' name='value' placeholder='Email'></input>
                  </div>
               <div className='btn'>
                <button>Sign up now!</button>
               </div>
               </div>
                </div>

            </section>

            <section>
                <div className='nove'>
                    
                </div>
            </section>

        
        </>
    )
}

export default Home