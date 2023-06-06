import React,{useRef,useState,useEffect} from 'react'
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import styles from './Navigation.module.css'
import { Globalcontext } from '../../App'
import Logo from '../Image/logoend.png'






export default function Navigation() {
    const mydata = React.useContext(Globalcontext)


    
    

    return (
        <>

            <nav className={styles.nav}>
                <h1  style={{display:"none"}} >Peony skin care</h1>
                <Link to="/home" > <img className={styles.logo} src={Logo} alt="logo" /></Link>

                <div className={styles.link_group}>
                    <Link to="/home" >ANA SƏHİFƏ</Link>
                    <Link to="/shop">MAĞAZA</Link>
                    <Link to="/navblog" >BLOQ</Link>
                    <Link to="/aboutus" >HAQQIMIZDA</Link>
                    <Link to="/contactus" >ƏLAQƏ</Link>
                    
                </div>
                <div className={styles.icon_group}>
                    <Link to="/shop"> <i  onClick={mydata.SearchbarOpen} className="fa-solid fa-magnifying-glass"></i></Link>
                    <Link to="/favorite" style={{textDecoration:"none"}}> <i className="fa-regular fa-heart"></i></Link><span className={styles.circle} >{mydata.cardcount}</span>
                    <Link to="/cart"> <i className="fa-solid fa-bag-shopping"></i></Link>
                    <Link to="/login"> <i className="fa-solid fa-user"></i></Link>
                    
                </div>
                
            </nav>


        </>

    )
}
