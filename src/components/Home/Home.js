import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Home.module.css'
import Photo1 from '../Image/sale1.jpg'
import Photo2 from '../Image/sale2.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';


export default function Home() {
  const [animation, setAnimation] = useState(true)
  const [animationcheck, setAnimationcheck] = useState(true)
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    if (animationcheck) {

      if (animationcheck) {
        setAnimation(true)
        setAnimationcheck(false)
        setInterval(function () {
          setAnimation(false)
          setAnimationcheck(true)

        }, 3000)
      }
      //  else {
      //   { setAnimation(true)
      //     setAnimationcheck(true)
      //     setInterval(function() {
      //       setAnimation(false)
      //       setAnimationcheck(false)

      //     }, 3500)
      //    }
      //  }



    }

    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // setInterval(function() {
  //   if ( animation){setAnimation(false)}
  //   else {setAnimation(true)}
  //   }, 2500)

  return (

    <>
      <main>
        <section className={styles.slideshow} >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide><div className={styles.slidecontainer} >
              <div className={styles.slidehead} >
                <span>TƏMİZ VƏ TƏRAVƏTLİ HİSS ET</span>
                <h2>ŞAMPUNDAN TEMIZLEYICI</h2>
                <h2>ƏVVƏL MASKA</h2>
                <Link to="/shop"><button className={styles.shop_button} >Mağazaya keç</button></Link>
              </div>
              {/* <img className={styles.slideimg} src="./image/slidebir.jpg" alt="" /> */}
              <img class="nivo-main-image" src="http://zonan.demo2.towerthemes.com/image/cache/catalog/slider/slide_1-2-1920x840.jpg"
              // style="display: inline; height: 384px; width: 877px;"
              />
            </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className={styles.slidecontainer} >
                <div className={styles.slidehead} >
                  <span>SAÇLARINIZIN QAYĞISINA QALIR</span>
                  <h2> Kömür & Keratin</h2>
                  <h2>Şampun 300ml</h2>
                  <Link to="/shop"><button className={styles.shop_button} >Mağazaya keç</button></Link>
                </div>
                <img class="nivo-main-image" src="http://zonan.demo2.towerthemes.com/image/cache/catalog/slider/slide_1-1-1920x840.jpg"
                // style="display: inline; height: 384px; width: 877px;"
                />
              </div>
            </SwiperSlide>

            <div style={{ display: "none" }} className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </section>


        <section className={styles.sale} >
          <div className={styles.monday_sale} >
            <img src={Photo1} alt="" />
            <p className={styles.first_text}>Kiber Bazar Ertesi</p>
            <p className={styles.second_text} >Böyük endirim 50%</p>
            <Link to="/shop"><span className={styles.third_text} >Kolleksiyaya bax <i className="fa-regular fa-circle-play"></i></span></Link>
          </div>
          <div className={styles.winter_sale} >
            <img src={Photo2} alt="" />
            <p className={styles.first_text} >Qış Sonu Endirimleri</p>
            <p className={styles.second_text} >70%-ə qədər endirim</p>
            <Link to="/shop"><span className={styles.third_text} >Kolleksiyaya bax <i className="fa-regular fa-circle-play"></i></span></Link>

          </div>
        </section>
      </main>
    </>
  )
}
