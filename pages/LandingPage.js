import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from './Carousel';
import { client } from '../utils/shopify'


function LandingPage({products,collections}) {
    // console.log({products})
    console.log(collections.products)
    // const variant = collections.products.map((products))

    const addToCart = async () =>{
        const storage = window.localStorage
        let checkoutId = storage.getItem('checkoutId')
         if(!checkoutId){
               const checkout = await client.checkout.create()
               checkoutId = checkout.id
             }
             storage.setItem('checkoutId',checkoutId)
         // let checkoutId = checkout.id; // ID of an existing checkout
         const lineItemsToAdd = [
           {
             variantId: variant.id,
             customAttributes: []
           }
         ];
         
         // Add an item to the checkout
         client.checkout.addLineItems(checkoutId, lineItemsToAdd,).then((checkout) => {
           // Do something with the updated checkout
           setDataToStorage('checkout', checkout)
           console.log(JSON.parse(JSON.stringify(checkout)));
           console.log(checkout.lineItems); // Array with one additional line item
         });
        }
    
    return (
        <div>
            <Navigation products={products} />
            <Carousel/>
            
                <div >
                </div>
                {/* New Collection Section */}
                <div className="container mx-auto mt-24 ">
                <h1 className='font-serif text-4xl text-center'>The New Collection</h1>
                </div>
                <div className='container mx-auto mt-20 mb-24'>
                <div key={products.id} className='grid grid-cols-2 gap-y-10 gap-x-4 p-5 lg:grid-cols-4 '>
                {collections.products.map((product) => (
                    <div key={products.id}>
            <Link key={product.id} href={`product/${product.id}`}>
 <div key={products.id} className="w-full aspect-w-1  hover:opacity-90 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
 <Image
    
   src={product.images[0].src}
   alt={product.imageAlt}
   width={500}
   height={750}
   className="w-1/2 h-full p-6 object-center object-cover group-hover:opacity-75 cursor-pointer"
 />
</div>
</Link>
<h2 className="mt-4 text-xl font-serif text-black font-semibold tracking-wide truncate">{product.title}</h2>
<p className="mt-2 text-lg font-medium font-serif text-black">$ {product.variants[0].price}</p>
<button onClick={ addToCart } className='w-full xl:w-full bg-black text-white py-2 mt-4 font-serif hover:bg-gray-600'>ADD TO CART</button>

                    </div>
                   

                ))}
                    
                    </div>
                    


                </div>
                {/* Featured Collection Section */}
                <div className="container mx-auto flex justify-between mt-60">
                <h1 className='font-serif text-xl font-medium p-3 md:text-2xl '>Featured Collection</h1>
                <Link key={products.id} href='/AllProducts'>
                <button className='self-end underline font-serif text-xl p-3 md:text-2xl'>SHOP NOW</button>
                </Link>
                </div>
                {/* Featured Collection Grids */}
                <div className='container mx-auto '>
                    <div className='grid grid-cols-4 gap-4 mb-40 p-3'>
                        <div className=' transform hover:scale-90 transition duration-500  text-white col-span-2'>
                        <img
                           src='https://images.unsplash.com/photo-1616186692359-e14c5224e4e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80'
                           className='object-cover'
                           />
                        </div>
                        <div className=' transform hover:scale-90 transition duration-500 text-white col-span-2 '>
                        <img
                           src='https://images.unsplash.com/photo-1634304669792-b774a8c9ac7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80'
                           className=''
                           />

                        </div>
                        <div className=' transform hover:scale-90 transition duration-500 text-white col-span-2 '>
                        <img
                           src='https://images.unsplash.com/photo-1621341103818-01dada8c6ef8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80'
                           className='object-contain'
                           />

                        </div>
                        <div className=' transform hover:scale-90 transition duration-500 text-white col-span-2'>
                           
                           <img
                           src='https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80'
                           className='object-contain'
                           />

                        </div>
                        
                        
                    </div>

                </div>

            <Footer />
        </div>
    );
}

export default LandingPage;

