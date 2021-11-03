import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';


function Navigation(props) {
    return (
        <div>
            
            <div className="header">
                <ol>
                    <li>
                        <Link href="/">
                        <a>The Jet Setters</a>
                        </Link>

                        <div className="solid">
                        </div>


                        <div className="font-sans h-7 text-grey bg-white flex mt-2 ml-4 justify-between">
                            <div className="w-full overflow-hidden flex">
                            <input type="text" className="px-3 max-w-md text-sm ml-8 " placeholder="Search..."></input>
                            <button className="flex items-center justify-center px-4 border-l">
                            <svg className="h-4 w-4 text-grey-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                            </button>
                            </div>
                        </div>

                        <div className="flex-none hidden px-2 mx-2 lg:flex justify-end">
                            <div className="flex items-stretch">
                            <a className="btn btn-ghost btn-xm text-sm ml-8 -mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 inline-block w-5 mr-2 stroke-current">              
                            <path strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
                            </svg>
                            Wishlist</a> 

                            <a className="btn btn-ghost btn-sm text-sm ml-8 -mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Sign In
                            </a> 
                            
                            <a className="btn btn-ghost btn-sm text-sm ml-8 -mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Shopping Cart
                            </a> 
                            
                            </div>
                        </div>

  

                        {/* <div className="solid"> </div>
            <div className="iconDirectories">
                <ol>
                    <li>
                        <Link href="/Wishlist">
                        <a><FaHeart/>Wish List</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Login">
                        <a><FaUser/>Sign in</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Cart">
                        <a><FaShoppingCart/>Cart</a>
                        </Link>
                    </li>
                </ol>
            </div> */}
                    </li>
                </ol>
            </div>
            <div className="directories">
                <ol>
                    <li>
                        <Link href="/Collections">
                        <a>COLLECTIONS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/NewIn">
                        <a>NEW IN</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ReadyToWear">
                        <a>READY TO WEAR</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/AllProducts">
                        <a>All PRODUCTS</a>
                        </Link>
                    </li>
                </ol> 

            </div>
            <div>
            </div>
    </div>

    );
}

export default Navigation;