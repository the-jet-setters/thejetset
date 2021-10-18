import styles from '../styles/Home.module.css'
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Head from "next/head";
import Image from "next/image";

import { client } from "../utils/shopify";
import Link from 'next/link'
import React,{useEffect , useState} from "react";



export default function Home({products}) {

  console.log({products});
  
  
  
  return (
    <div className={styles.container}>
      {/* <div>
        {products.map(product =>{
          return(
            <Link key={product.id} href={`product/${product.id}`}>
            <p key={product.id}>{product.title}</p></Link>
          )
        })}
      </div> */}

    <Navigation />
    <LandingPage />
    <Footer />
    

        </div>
              
   

  )
}
  
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const products = await client.product.fetchAll()
  
  

  // Pass data to the page via props
  return { props: { products: JSON.parse(JSON.stringify(products)) } }
}
