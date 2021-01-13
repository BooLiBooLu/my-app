//rfce
import React from 'react'
//import
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { Fabars, FaTimes } from 'react-icons/fa'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    {/* Link */}
                    <Link to='/' className="navbar-logo">
                        <MdFingerprint className="navbar-icon" />
                        LAVISH
                    </Link>
                    <div className="menu-icon">

                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Navbar
