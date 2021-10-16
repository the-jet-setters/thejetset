import Link from 'next/link';


function Navigation(props) {
    return (
        <div>

         <ul>
             <li>
                <Link href="/LandingPage">
                <a>The Jet Setters</a>
                </Link>
            </li>
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

        --------------------------

        <ul>
             <li>
                <Link href="/Login">
                <a>Sign in</a>
                </Link>
            </li>
            <li>
                <Link href="/Checkout">
                <a>Check Out</a>
                </Link>
            </li>
        </ul>


        </div>
    );
}

export default Navigation;