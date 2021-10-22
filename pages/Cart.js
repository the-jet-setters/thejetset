import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Link from 'next/dist/client/link';

function Cart(props) {
    return (
        <div>
            <Navigation />
            
            {/* Item details */}
            <div className="grid grid-cols-2">
            <div className="flex items-center grid-cols-1 max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div>
                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-coolGray-50 text-coolGray-800">
	                <h2 className="text-xl font-semibold">Shopping cart</h2>
	                <ul className="flex flex-col divide-y divide-coolGray-300">
		            
                        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			            <div className="flex w-full space-x-2 sm:space-x-4">
				        <image className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-coolGray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="product">
				        </image>
                <div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Product Title</h3>
							<p className="text-sm text-coolGray-600">Collection</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">Price</p>
							<p className="text-sm text-coolGray-400">$ 75.50</p>
						</div>
					    </div>
					<div className="flex text-sm divide-x"> 
						<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span>Remove</span>
						</button>
						<button type="button" className="flex items-center px-2 py-1 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
							</svg>
							<span>Add to favorites</span>
						</button>
					</div>
				</div>
			</div>
		            </li>
		            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			        <div className="flex w-full space-x-2 sm:space-x-4">
				        <image className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-coolGray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="product">
				        </image>
                    <div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Product Title</h3>
							<p className="text-sm text-coolGray-600">Collection</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">Price</p>
							<p className="text-sm text-coolGray-400">$ 79.99</p>
						</div>
					</div>
					<div className="flex text-sm divide-x">
						<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span>Remove</span>
						</button>
						<button type="button" className="flex items-center px-2 py-1 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
							</svg>
							<span>Add to favorites</span>
						</button>
					    </div>
				        </div>
			        </div>
		            </li>
		        </ul>
                 
                </div>
                </div>
                <div>

                </div>
            </div>


            
        {/* Order Summary */}
        <div className="grid grid-cols-1 max-w-lg max-w-xs bg-gray-50 mx-auto text-center m-10 ">
        
            <div className="flex flex-col m-20">
                <h2 className="text-2xl text-center font-semibold mb-3">Order Summary</h2>
	            
                    <div className="pt-4 space-y-2">
                    <div className="flex justify-center mb-2">
                    <h2 className="text-xl text-center mt-5">Subtotal $ 0</h2>
                    </div>
                    </div>
            
                    <div className="pt-4 space-y-2 ">
                    <button className="w-full center text-white bg-gray-900 font-medium text-2XL px-5 py-2.5 text-center">CHECKOUT</button>
                    <button className="w-full center text-gray border gray-500 font-medium text-2XL px-5 py-2.5 text-center">UPDATE BAG</button>
                    </div>

                    <div className="pt-4 space-y-2 m-5"> 
                    <Link href="/NewAccount" className="text-sm">CONTINUE SHOPPING</Link>
                    </div>
                    
            </div>
        </div> 
        </div>
        
        <Footer />
        </div>
    );
}

export default Cart;