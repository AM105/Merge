import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeBags.css'

import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from "../image/20.jpg"


function HomeBags() {
  return (
    <>

<Swiper
      
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    
    >
      <SwiperSlide>
      <div class="share">
                            <img src={img1} class="sure" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Madewell</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="share">
                            <img src={img1} class="sure" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Card Style</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
      </SwiperSlide>
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
                            <img src={img1} class="sure" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
      </SwiperSlide>
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
                            <img src={img1} class="sure" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
      </SwiperSlide>
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
                            <img src={img1} class="sure" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="share">
                            <img src={img1} class="sure" alt="..." />
                            <div class="card-point">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
      </SwiperSlide>
      ...
    </Swiper>

    </>
  )
}

export default HomeBags