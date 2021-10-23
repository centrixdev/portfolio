import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <Link 
              to="/impressum"
              className="footer-text">IMPRESSUM</Link>
            <span> </span>
            <Link 
              to="/datenschutz"
              className="footer-text">DATENSCHUTZ</Link>
            <p 
              className="footer-text">© 2021 dominik. All rights reserved.</p>
        </footer>
    )
}
