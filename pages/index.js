import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Footer from './Footer';

export default function Home() {
  return (
    <div className={styles.container}>

 
    


    


    <Navigation />
    <LandingPage />
    <Footer />
    

        </div>
              
   

  )
}