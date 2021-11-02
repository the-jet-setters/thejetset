import React from 'react';
import { client } from "../utils/shopify"
import Navigation from './Navigation';
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import Footer from './Footer';

function AllProducts({products}) {
      console.log({products})
      return (
            <div>
                  <Navigation/>
               <div className='container mx-auto mt-6 mb-24'>
                     <div className='font-serif text-2xl mt-10 mb-10 text-center'>
                           ALL PRODUCTS
                     </div>
                <div className='grid grid-cols-2 gap-y-10 gap-x-4 p-5 xl:grid-cols-4 mx-auto'>
                {products.map((product) => (
                    <div key={products.id}>
            <Link key={product.id} href={`product/${product.id}`}>
 <div className="w-full aspect-w-1  hover:opacity-90 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
 <Image
   src={product.images[0].src}
   alt={product.imageAlt}
   width={500}
   height={700}
   className="w-full h-full object-center object-cover group-hover:opacity-75 cursor-pointer"
 />
</div>
</Link>
<h2 className="mt-2 text-base font-serif text-black font-semibold tracking-wide truncate">{product.title}</h2>
<p className="mt-2 text-lg font-medium font-serif text-black">$ {product.variants[0].price}</p>
<button className='w-full bg-black text-white py-2 mt-4 font-serif hover:bg-gray-600'> ADD TO CART</button>

                    </div>
                   

                ))}
                    
                    </div>
                    


                </div>
                <Footer/>
                  
            </div>
      );
}

export default AllProducts;

export async function getServerSideProps() {
      // Fetch data from external API
      const products = await client.product.fetchAll()
      
      
    
      // Pass data to the page via props
      return { props: 
        { products: JSON.parse(JSON.stringify(products))}}
      
    }