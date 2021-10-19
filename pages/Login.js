import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Login(props) {
    return (
        <div>
            <Navigation />
            
            <div className="w-full h-screen flex items-center justify-center">
                <form>
                <h3 className="text-2xl font-bold text-center mb-10">Log in</h3>

                    <div className="mb-6 text-center">
                    <label className="text-md font-medium text-gray-900 block mb-2 ">E-MAIL ADDRESS</label>
                    <input type="email" id="email" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-black-500 focus:border-black-900 w-6/12 block p-2.5" placeholder="Username" required>
                    </input>
                    </div>
                    
                    <div className="mb-6 text-center">
                    <label className="text-md font-medium text-gray-900 block mb-2">PASSWORD</label>
                    <input type="password" id="password" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-black-500 focus:border-black-500 w-6/12 block p-2.5" placeholder="Password" required>
                    </input>
                    </div>
                     
                    <div className="flex items-start mb-6 text-center"> 
                    <a href="#" className="text-l">FORGOT PASSWORD</a>
                    </div>
                    
                    <div className="flex items-center h-5 text-center">
                    <button type="submit" className="w-full m-8 text-white bg-gray-900 font-medium text-sm px-5 py-2.5 text-center">
                        LOG IN</button>
                    </div>

                    <div className="flex items-start my-6 text-center"> 
                    <a href="#" className="text-l">CREATE AN ACCOUNT</a>
                    </div>
                
                </form>
            </div>
                
            <Footer />

        </div>
    );
}

export default Login;