import React from 'react'
import { Globalcontext } from '../../App'
import styles from './Blog.module.css'
import BlogImg from '../Image/blogimg.jpg'
import { Link } from 'react-router-dom'

export default function Blog() {
  const mydata = React.useContext(Globalcontext)


  return (
    <>
      <section className={styles.title} >
        <p>Ən son Bloqlar</p>
        <p>Məşhur kosmetoloqların fikirlərini nəzərdən keçirin</p>
      </section>
      <section className={styles.blog_container}>


        {mydata.blogs && mydata.blogs.slice(0,3).map((number, indexone) => {

          return (
            <Link to={`/navblog/${number.id}`}>
              <div className={styles.blog_box} key={indexone} >
              <div className={styles.img_frame} >
                <img src={number.imgtitle} alt="" />
              </div>
              <div className={styles.description_box} >
                <p>{number.caption}</p>
                <p>{number.description}</p>
                <button>Ardını oxu</button>
              </div>
            </div></Link>
 
          )

        })}


      </section>

      <div  className={styles.horizontal} ></div>
    </>
  )
}
