import React from 'react'
import styles from './AboutUs.module.css'
import Image from '../Image/tempsnip.png'
import { Globalcontext } from '../../App'
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import Girlsimg from '../Image/girls.avif'
import Colbaimg from '../Image/formula.avif'
import Mrs1 from '../Image/mrs1.png'
import Mrs2 from '../Image/mrs2.png'
import Mrs3 from '../Image/mrs3.png'
import Mrs4 from '../Image/mrs4.png'







export default function AboutUs() {
  const mydata = React.useContext(Globalcontext)
  return (

    <>


<section className={styles.formul_sec} >

<div  className={styles.colbaimg} >
  <img src={Colbaimg} alt="" />
</div>

<div>
  <p>
    Peony Formula: Performans, Təhlükəsizlik, Elm
  </p>
  <p>
     Peony 1968-ci ildə dermatoloq tərəfindən hazırlanmış ilk dəriyə qulluq xəttini təqdim etdi. Vəd: əla dəri yaradan effektiv, təhlükəsiz, klinik cəhətdən sübut edilmiş formulalar təqdim etmək. Dərinizə potensial zərər verə biləcək şəkildə allergen, qıcıqlandırıcı və inqrediyentlərdən istifadə etməkdən çəkinirik.
  </p>
  <p>
    Təsdiq edilmiş nəticələr, qıcıqlanmadan maksimum nəticə əldə etmək üçün ən son elmi nailiyyətlərdən istifadə edərək bir çox inqrediyentlərin necə birləşdirildiyinə bağlıdır. Elm inkişaf etdikcə biz tədqiqatçılarımız, formulatorlarımız, klinisistlərimiz və rəhbər şuranın sertifikatlı dermatoloqları ilə birlikdə inqrediyentləri davamlı olaraq yenidən yoxlayırıq.
  </p>
  <p>
    Paraben yoxdur. Ftalatlar yoxdur. Ətir yoxdur. Sadəcə xoşbəxt dəri.
  </p>

</div>

</section>




      <section className={styles.sec_about} >

        <div className={styles.info_about} >

          <div className={styles.info_left} >
            <p> <b>PEONY</b> 1960-cı ildə Pierrino tərəfindən təsis edilib. Bu, bir sıra qabaqcıl makiyaj, üz və bədən prosedurlarını özündə cəmləşdirən Azərbaycan peşəkar kosmetika brendidir. Hər yaşda olan qadınların gözəllik tələblərini ödəmək üçün yaradılmış yüksək keyfiyyətli təhlükəsiz və effektiv məhsullar.</p>
            <b>ÖZ GÖZƏLİNİZİ TAPIN</b>
            <p>PEONY gözəllik vizyonunu belə yekunlaşdırır. Qeyri-adi geniş və müxtəlif çeşidli məhsullar vasitəsilə PEONY hər kəsə öz şəxsiyyətini ifadə etməyə imkan verir. Həyatınızın hər mərhələsində üslubunuza, dəri tonunuza, dəri tipinizə və xüsusi zövqünüzə uyğun bazarda unikal olan misilsiz müxtəlif rənglər, effektlər və hisslər. KIKO-nun kimliyi moda, incəsənət və dizaynın dünya paytaxtı kimi “Made in Azerbaijan” dəyərlərinə əsaslanır. Orijinal teksturaların, rənglərin və gözəlliyin təkamülünün ustaları olaraq, keyfiyyət və yaradıcılığın mükəmməl birləşməsi üçün zəmanətli performansa malik keyfiyyətli düsturlar təklif edirik.</p>
            <i>Əlçatan və Qarşısıalınmaz, Azərbaycandan Sevgi ilə.</i>
          </div>
          <div className={styles.info_right} >
            <img src={Image} alt="" />
          </div>
        </div>


      </section>


      <p  style={{textAlign:"center",fontSize:"25px",marginTop:"20px"}} >Komandamız</p>

      <section className={styles.staff} >
        <div  className={styles.container_img}>
          <div>
            <img src={Mrs1} alt="" />
          </div>
          <p className={styles.bold_text} ><b>Məmmədova Fərqanə Oktay qızı</b></p>
          <p>İdarə Heyətinin Sədri, Baş İcraçı Direktor</p>
        </div>
        <div  className={styles.container_img} >
          <div>
            <img src={Mrs2} alt="" />
          </div>
          <p className={styles.bold_text} ><b>Mavliyarova Günel Rafael qızı</b></p>
          <p>Beynəlxalq Əlaqələr üzrə Müşavir</p>
        </div>
        <div   className={styles.container_img} >
          <div>
            <img src={Mrs3} alt="" />
          </div>
          <p className={styles.bold_text} ><b>Nəsirova Çinarə Mərdanovna</b></p>
          <p>Marketinq idarəsinin Marketinq ekspert mərkəzi</p>
        </div>
        <div  className={styles.container_img} >
          <div>
            <img src={Mrs4} alt="" />
          </div>
          <p   className={styles.bold_text} ><b>Qazıyeva İlahə Arif qızı</b></p>
          <p>Xəzinədarlıq departamenti</p>
        </div>
      </section>






{/* 
      <section className={styles.girls_img} >


        <div className={styles.text} >

          <div className={styles.large_text}  >
            <p>Bahar sənə </p>
            <p>gözəl görünür.</p>
          </div>
          <div className={styles.lil_text} >
            <p>
              Yağlı dəri, qızarmış yanaqlar və parıldayan dodaqlar üçün hər şe-
            </p>
            <p>
              yə dəyər. Bu mövsümün təzə görünüşlərini geyinmək çox asandır.

            </p>
          </div>

          <button>İndi al</button>

        </div>

        <img src={Girlsimg} alt="" />

      </section> */}


      



    </>
  )
}
