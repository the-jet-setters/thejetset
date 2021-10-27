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

                        <div className="solid"> </div>
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
            </div>
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