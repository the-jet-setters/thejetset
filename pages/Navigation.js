import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';


function Navigation(props) {
    return (
        <div>
            <div className="header">
                <ul>
                    <li>
                        <Link href="/LandingPage">
                        <a>The Jet Setters</a>
                        </Link>
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
                </ul> 
            </div>
        <div className="">
            <ul>
                <li>
                    <Link href="/WishList">
                    <a>Wish List <FaHeart/> </a>
                    </Link>
                </li>
                <li>
                    <Link href="/Login">
                    <a>Sign in</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Checkout">
                    <a>Cart </a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Navigation;