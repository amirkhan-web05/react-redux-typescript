import React from 'react'
import {NavBar} from "./NavBar";

export const Header:React.FC = () => {
    return (
     <header className='header bg-dark w-100'>
        <div className="container">
            <NavBar/>
        </div>
     </header>
    )
}