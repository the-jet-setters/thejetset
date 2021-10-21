import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { client } from "../utils/shopify";
import Link from 'next/link'
import React,{useEffect , useState} from "react";
import LandingPage from './LandingPage';
import Navigation from "./Navigation";
import Footer from './Footer';
import Login from './Login';
import Checkout from './Checkout';
import NewAccount from './NewAccount';




export default function Home({products,collections}) {

  console.log({products});
  console.log({collections});
  
  
  
  return (


    <div className={styles.container}>
     <div className='container'>

     </div>
     <div>

        {/* {products.map(product =>{

        {products.map(product =>{

          return(
            <Link key={product.id} href={`product/${product.id}`}>
            <p key={product.id}>{product.title}</p></Link>
          )

        })} */}
      </div>

       
      


       
      <LandingPage products={products} collections={collections} />

      

    </div>
  );

    <div>

      <Navigation />
      <LandingPage />

      <Login />
      <Checkout />
      <NewAccount />
      <Footer />
  

    </div>



   
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const products = await client.product.fetchAll()
  const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI4NzU5OTc4ODI0OQ=='
  const collections = await client.collection.fetchWithProducts(collectionId)
  
  

  // Pass data to the page via props
  return { props: 
    { products: JSON.parse(JSON.stringify(products)),
    collections:JSON.parse(JSON.stringify(collections))
    },}
  
}
    
     

