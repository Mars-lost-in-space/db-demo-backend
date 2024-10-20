import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
        <nav className="fixed top-0 w-full bg-gray-800 text-white shadow-md">
                <div className="flex justify-around p-4">
                        <Link to="/home" className="hover:text-gray-400">Employees</Link>
                        <Link to="/" className="hover:text-gray-400">Login</Link>
                        
                </div>
        </nav>
    )
}

export default Navbar