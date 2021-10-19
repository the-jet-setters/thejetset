import Client from 'shopify-buy'


// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
      domain: 'the-jet-setters.myshopify.com',
      storefrontAccessToken: 'c1bc57e4087cfb2e0ef7bd550d2b62e8'
    });



    export { client }