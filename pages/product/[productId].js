import { useRouter } from 'next/router'
import { client } from '../../utils/shopify'
import Image from 'next/image'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { useState } from 'react'

const Post = ({product, checkout}) => {
  console.log({checkout, product});
  const [amount, setAmount] = useState(1)
  const variant = product.variants[0]
  
       const addToCart = () =>{
        const checkoutId = checkout.id; // ID of an existing checkout
        const lineItemsToAdd = [
          {
            variantId: variant.id,
            quantity: amount,
            customAttributes: []
          }
        ];
        
        // Add an item to the checkout
        client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
          // Do something with the updated checkout
          console.log(JSON.parse(JSON.stringify(checkout)));
          console.log(checkout.lineItems); // Array with one additional line item
        });
       }
  return <div key={product.id}>
  
  <Navigation />

  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <Image alt={product.imageAlt} width={550} height={750} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center" src={product.images[0].src}></Image>
      
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-md title-font text-gray-500 tracking-widest mb-8">New Collection</h2>
        <h1 className="text-gray-900 text-4xl title-font font-medium mb-5">{product.title}</h1>
        <span className="title-font font-medium text-2xl text-gray-900">$ {product.variants[0].price}</span>
        <div className="flex mb-4">
      </div>
        
        <p className="text-xl leading-relaxed">{product.description}</p>
        <div className="flex mt-7 items-center pb-5 border-b-2 border-gray-100 mb-5">
        
        <div className="flex items-center">
          <span className="mr-3">Size</span>
          <div className="flex relative">
            <select className="border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-black-200 focus:border-black-500 text-base pl-9 pr-10">
              <option>S</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              </select> 
            
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg fill="none" stroke="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
        
          <div className="block">
            <button onClick={addToCart} className="w-full m-5 text-white bg-gray-900 font-medium text-2XL px-5 py-2.5 text-center">ADD TO CART</button>
            <div className="flex justify-end">
            <button type="button" className="flex items-center px-2 py-1 space-x-3">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
							<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
							</svg>
							<span>Add to favorites</span>
						</button>
            </div>        
          </div>
          </div>
      </div>
    </div>
  </section>

  <Footer />
  
  </div>
}






export async function getServerSideProps({ query }) {
  const productId = query.productId
  // Fetch data from external API
  const product = await client.product.fetch(productId)
  const checkout = await client.checkout.create()
  console.log({product});
  
  

  // Pass data to the page via props
  return { props: { 
    product: JSON.parse(JSON.stringify(product)),
    checkout: JSON.parse(JSON.stringify(checkout))
  } }
}

export default Post


{/* <div>
<h1> {product.title}</h1>
<h1>$ {product.variants[0].price}</h1>
<p>{product.description}</p>
<Image

src={product.images[0].src}
alt={product.imageAlt}
width={550}
height={750}

/>

</div> */}