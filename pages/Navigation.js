import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';


function Navigation(props) {
    return (
        <div>
            <div className="header">
                <ul>
                    <li>
                        <Link href="/">
                        <a>The Jet Setters</a>
                        </Link>
        <div className="iconDirectories">
            <ul>
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
                    <Link href="/Checkout">
                    <a><FaShoppingCart/>Cart</a>
                    </Link>
                </li>
            </ul>
        </div>
                    </li>
                </ul>
            </div>
            <div className="directories">
                <ul>
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
                </ul> 
            </div>
    </div>
    );
}

export default Navigation;