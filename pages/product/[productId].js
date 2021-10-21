import { useRouter } from 'next/router'
import { client } from '../../utils/shopify'
import Image from 'next/image'
import Navigation from '../Navigation'
import Footer from '../Footer'

const Post = ({product}) => {
  
  
      
  return <div> <div key={product.id}>
  
   <div>
    <h1> {product.title}</h1>
    <h1>$ {product.variants[0].price}</h1>
    <p>{product.description}</p>
    <Image
    
   src={product.images[0].src}
   alt={product.imageAlt}
   width={550}
   height={750}
    
    />
  
  </div>
  </div>
  
  <Navigation />

  <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt={product.imageAlt} width={550} height={750} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center" src={product.images[0].src}></img>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-md title-font text-gray-500 tracking-widest mb-7">New Collection</h2>
        <h1 className="text-gray-900 text-4xl title-font font-medium mb-3">{product.title}</h1>

        <span className="title-font font-medium text-2xl text-gray-900">$ {product.variants[0].price}</span>

        <div className="flex mb-4">
         
        </div>
        <p className="text-xl leading-relaxed">{product.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
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
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="block">
           
          <button className="w-full m-5 text-white bg-gray-900 font-medium text-2XL px-5 py-2.5 text-center">ADD TO CART</button>
          <div className="flex justify-end">
          <button className="flex justify-end mr-3">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-6" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
          <label className="flex justify-end">ADD TO FAVORITES</label>
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
  console.log({product});
  
  

  // Pass data to the page via props
  return { props: { product: JSON.parse(JSON.stringify(product)) } }
}

export default Post