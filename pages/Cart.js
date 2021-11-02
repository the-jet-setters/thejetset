import React, { useEffect, useState,} from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Link from "next/dist/client/link";
import shopify, { client } from '../utils/shopify'
import Image from "next/dist/client/image";


const getDataFromStorage = (data) => {
  const storage = window.localStorage;
  return JSON.parse(storage.getItem(data));
};
const setDataToStorage = (key, data) => {
  const storage = window.localStorage;
  //Stringify data and save in storage and when you get it you need to parse to have correct format for javascript
  storage.setItem(key, JSON.stringify(data));
};

const parseData = (key,data) =>{
const storeage = window.localStorage;
storeage.setItem(key, JSON.stringify(data))
}

function Cart(props) {
  const [checkout, setCheckout] = useState(null);

    useEffect(() => {
	if(typeof window !=='undefined'){

		const checkout = getDataFromStorage("checkout",checkout);
		if(checkout){

			client.checkout.fetch(checkout.id).then((response) =>{
		
				setCheckout(response);
			})
		}
	}   


			
	    
	    
    }, []);
    
    const removeItemFromCart = async (check,items) =>{
	const checkoutId = check.id
	const lineItemIdsToRemove = [
		 items.id,
	    ];
	    
	    // Remove an item from the checkout
	    const checkout = await client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((checkout) => {
		// Do something with the updated checkout
		setDataToStorage(checkout)
		setCheckout(parseData(checkout))
		console.log(checkout.lineItems); // Checkout with line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' removed
	    });
    }
    console.log({checkout})

    if(!checkout){
	    return(
		    <div>
			    <Navigation />
			    <h2 className="text-xl font-semibold">
				Your Cart is Empty
			    </h2>
			    <Footer />
		    </div>
	    )
    }else
    
 	   {

	    return (
		<div>
		  <Navigation />
	  
		  {/* Item details */}
		  <div className="grid grid-cols-2">
		    <div className="flex items-center grid-cols-1 max-w-6xl px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
			<div>
			  <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-coolGray-50 text-coolGray-800">
			    <h2 className="text-xl font-semibold">
				Shopping cart
			    </h2>
			    {checkout.lineItems.map((items) => (
			    <ul
			      key={items.id}
				className="flex flex-col divide-y divide-coolGray-300"
			    >
				<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
				  <div className="flex w-full space-x-2 sm:space-x-4">
				    <Image
					className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-coolGray-500"
					src={items.variant.image.src}
					alt="product"
					width={300}
					height={500}
				    ></Image>
				    <div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
					  <div className="space-y-1">
					    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
						{items.title}
					    </h3>
					    <p className="text-sm text-coolGray-600">
						Collection
					    </p>
					  </div>
					  <div className="text-right">
					    <p className="text-lg font-semibold">
						$ {items.variant.price}
					    </p>
					    <p className="text-sm text-coolGray-400">
						$ hiowg
					    </p>
					  </div>
					</div>
					<div className="flex text-sm divide-x">
					  <button 
					  onClick={() =>removeItemFromCart(checkout,items)}
					    type="button"
					    className="flex items-center px-2 py-1 pl-0 space-x-1"
					  >
					    <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="w-4 h-4 fill-current"
					    >
						<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
						<rect
						  width="32"
						  height="200"
						  x="168"
						  y="216"
						></rect>
						<rect
						  width="32"
						  height="200"
						  x="240"
						  y="216"
						></rect>
						<rect
						  width="32"
						  height="200"
						  x="312"
						  y="216"
						></rect>
						<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
					    </svg>
					    <span>Remove</span>
					  </button>
					  <button
					    type="button"
					    className="flex items-center px-2 py-1 space-x-1"
					  >
					    <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="w-4 h-4 fill-current"
					    >
						<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
					    </svg>
					    <span>
						Add to favorites
					    </span>
					  </button>
					</div>
				    </div>
				  </div>
				</li>
			
			    </ul>
				 ))}    
			  </div>
			</div>
			<div></div>
		    </div>
	  
		    {/* Order Summary */}
		    <div className="grid grid-cols-1 max-w-lg max-w-xs bg-gray-50 mx-auto text-center m-10 ">
			<div className="flex flex-col m-20">
			  <h2 className="text-2xl text-center font-semibold mb-3">
			    Order Summary
			  </h2>
	  
			  <div className="pt-4 space-y-2">
			    <div className="flex justify-center mb-2">
				<h2 className="text-xl text-center mt-5">
				  Subtotal $ {checkout.subtotalPrice}
				</h2>
			    </div>
			  </div>
	  
			  <div className="pt-4 space-y-2 ">
			    <Link href={`${checkout.webUrl}`}>
				<button className="w-full center text-white bg-gray-900 font-medium text-2XL px-5 py-2.5 text-center">
				  CHECKOUT
				</button>
			    </Link>
			    <button className="w-full center text-gray border gray-500 font-medium text-2XL px-5 py-2.5 text-center">
				UPDATE BAG
			    </button>
			  </div>
	  
			  <div className="pt-4 space-y-2 m-5">
			    <Link
				href="/NewAccount"
				className="text-sm"
			    >
				CONTINUE SHOPPING
			    </Link>
			  </div>
			</div>
		    </div>
		  </div>
	  
		  <Footer />
		</div>
	    );
    }
    

}

export default Cart;
