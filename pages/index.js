import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Login from './Login';
import Checkout from './Checkout';



export default function Home() {
  return (

    <div className={styles.container}>
    
      <Navigation />
      <LandingPage />

      <Login />
      <Checkout />

      <Footer />
  

    </div>
              
   

  )
}