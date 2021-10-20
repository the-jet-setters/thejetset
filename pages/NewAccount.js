import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function NewAccount(props) {
    return (
        <div>
            <Navigation />
            <div>
            <section className="py-6 bg-coolGray-100 text-coolGray-900">
	            <div className="flex items-center grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		            <div className="py-6 md:py-0 md:px-6">
                        <form className="space-x-4">
                        <h3 className="text-2xl text-center m-8">Log In</h3>
                        
                        <div className="mb-3 text-center mb-2">
                        <input type="email" id="email" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-black-500 focus:border-black-900 w-6/12 block p-2.5" placeholder="Username" required>
                        </input>
                        </div>
                        
                        <div className="mb-3 text-center">
                        <input type="password" id="password" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-black-500 focus:border-black-500 w-6/12 block p-2.5" placeholder="Password" required>
                        </input>
                        </div>
                        
                        <div className="flex justify-end mt-7 m-12 "> 
                        <a href="#" className="text-sm">FORGOT PASSWORD</a>
                        </div>
                        
                        <div className="flex items-center h-5 text-center">
                        <button type="submit" className="w-full m-8 text-white bg-gray-900 font-medium text-md px-5 py-2.5 text-center">
                            LOG IN</button>
                        </div>

                        <div className="flex items-start m-12 "/>
                        </form> 
                    </div>
		            
                    <div className="py-6 md:py-0 md:px-6">
                        <form className="space-x-4">
                        <h3 className="text-2xl text-center m-8">Create an Account</h3>
                        
                        <div className="mb-3 text-center mb-2 flex">
                        <select className="block bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-2 leading-tight focus:outline-none focus:shadow-outline">
                            <option>Mr.</option>
                            <option>Mrs.</option>
                            <option>Ms.</option>
                            </select>
                        <input type="firstname" id="firstname" className="ml-2 w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-black-500 focus:border-black-900 w-6/12 block p-2.5" 
                            placeholder="First Name" required>
                        </input>
                        <input type="lastname" id="lastname" className="ml-2 w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-black-500 focus:border-black-900 w-6/12 block p-2.5" 
                            placeholder="Last Name" required>
                        </input>
                        </div>
                        
                        <div className="mb-3 text-center">
                        <input type="email" id="email" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-black-500 focus:border-black-500 w-6/12 block p-2.5" 
                            placeholder="Email" required>
                        </input>
                        </div>
                        
                        <div className="mb-3 text-center">
                        <input type="password" id="password" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-black-500 focus:border-black-500 w-6/12 block p-2.5" 
                            placeholder="Enter Password (At Least 8 Characters)" required>
                        </input>
                        </div>
                        
                        <div className="mb-3 text-center">
                        <input type="password" id="password" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-black-500 focus:border-black-500 w-6/12 block p-2.5" 
                            placeholder="Verify Password" required>
                        </input>
                        </div>
                        
                        <div className="flex items-center">
                        <input id="termsandcondition" name="termsandcondition" type="checkbox" className="h-4 w-4 text-black-600 focus:ring-black-500 border-gray-300 rounded"></input>
                        <label className="ml-2 block text-sm text-gray-900 m-5">
                        Agree on <a href="#" className="text-gray-500">Terms and Conditions.</a>
                        </label>
                        </div>
                        
                        <div className="flex items-center h-5 text-center m-8">
                        <button type="submit" className="w-full m-8 text-white bg-gray-900 font-medium text-md px-5 py-2.5 text-center">
                            CREATE ACCOUNT</button>
                        </div>

                        <div className="flex items-start m-12 "/>
                        </form> 
                    </div>

	            </div>
            </section>
            </div>
            <Footer />

        </div>
    );
}

export default NewAccount;