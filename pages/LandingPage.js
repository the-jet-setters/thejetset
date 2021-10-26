import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Link from 'next/link'
import Image from 'next/image'
import Carousel from './Carousel'


function LandingPage({products,collections}) {
    console.log({products})
    console.log(collections.products)
    
    return (
        <div>


            <Navigation products={products} />
            <Carousel/>

            
                <div className="newCollection">
                </div>
                {/* New Collection Section */}
                <div className="container mx-auto ">
                <h1 className='font-serif text-4xl text-center '>The New Collection</h1>
                </div>
                <div className='container mx-auto mt-20 mb-24'>
                <div key={products.id} className='grid grid-cols-4 gap-y-10 gap-x-4'>
                {collections.products.map((product) => (
                    <div key={products.id}>
            <Link key={product.id} href={`product/${product.id}`}>
 <div key={products.id} className="w-full aspect-w-1  hover:opacity-90 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
 <Image
   src={product.images[0].src}
   alt={product.imageAlt}
   width={500}
   height={750}
   className="w-full h-full object-center object-cover group-hover:opacity-75 cursor-pointer"
 />
</div>
</Link>
<h2 className="mt-4 text-xl font-serif text-black font-semibold tracking-wide">{product.title}</h2>
<p className="mt-2 text-lg font-medium font-serif text-black">$ {product.variants[0].price}</p>
<button className='w-full bg-black text-white py-2 mt-4 font-serif hover:bg-gray-600'> ADD TO CART</button>

                    </div>
                   

                ))}
                    
                    </div>
                    


                </div>
                {/* Featured Collection Section */}
                <div className="container mx-auto flex justify-between mt-60">
                <h1 className='font-serif text-3xl font-medium'>Featured Collection</h1>
                <Link key={products.id} href='/AllProducts'>
                <button className='self-end underline font-serif text-2xl'>SHOP NOW</button>
                </Link>
                </div>
                {/* Featured Collection Grids */}
                <div className='container mx-auto py-5 '>
                    <div className='grid grid-cols-4 gap-4  mb-40'>
                        <div className='bg-red-500 transform hover:scale-110 transition duration-500  text-white p-32 col-span-1.5'>
                            1
                        </div>
                        <div className='bg-blue-500 transform hover:scale-110 transition duration-500 text-white col-span-3 ml-2'>
                         2

                        </div>
                        <div className='bg-purple-500 transform hover:scale-110 transition duration-500 text-white col-span-2 p-64'>
                          3

                        </div>
                        <div className='bg-red-500 transform hover:scale-110 transition duration-500 text-white col-span-2'>
                           4

                        </div>
                        
                        
                    </div>

                </div>

            <Footer />
        </div>
    );
}

export default LandingPage;

