import React from 'react'
import styles from './Login.module.css'
import Logo from '../Image/Logowhite.png'
import Photo from '../Image/pexels-ann-poan-5797999.jpg'



export default function Login() {
    return (
        <section className={styles.container} >

            <div style={{ position: "relative" }} className={styles.photo} >
                <img className={styles.photo} src={Photo} alt="" />


            </div>
            <section className={styles.login} >

                <div className={styles.login_frame} >
                    <div className={styles.paragraph} >
                        <img className={styles.logo} src={Logo} alt="logo" />
                    </div>
                    <div className={styles.input} >
                        <input placeholder='E-poct ve ya telefon nomresi' type="text" name="" id="" />
                        <input placeholder='Sifre' type="password" name="" id="" />
                    </div>
                    <span className={styles.buttons}  > 
                    <button>Daxil ol</button>
                    <button>Qeydiyyat</button>
                    </span>


                </div>

            </section>
        </section>
    )
}
