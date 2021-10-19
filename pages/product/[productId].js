import { useRouter } from 'next/router'
import { client } from '../../utils/shopify'
import Image from 'next/image'

const Post = ({product}) => {
  
  
      
  return <div key={product.id}>
  
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