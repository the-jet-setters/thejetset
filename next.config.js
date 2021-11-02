module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com','images.unsplash.com'],
  },
  env:{
    SHOPIFY_STORE_DOMAIN:process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN:process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN
  }
}
