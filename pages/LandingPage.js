import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function LandingPage(props) {
    return (
        <div>
            <Navigation />
            
                <div className="newCollection">
                </div>
                <div className="theNewCollection">
                <h1>The New Collection</h1>
                </div>
                <div className="featuredCollection">
                <h1>Featured Collection</h1>
                </div>

            <Footer />
        </div>
    );
}

export default LandingPage;