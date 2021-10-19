import { useRouter } from 'next/router'
import { client } from '../../utils/shopify'

const Post = ({product}) => {
  
  
      
  return <p key={product.id}>Post: {product.title}</p>
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