import React from 'react';
import '../Footer/Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <p>&copy; {currentYear} Your Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
