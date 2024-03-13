import React from 'react'
import './style/header.css'
import logo from './image/logo.png'
export default function Header() {
    return (
        
        <div className="container-fuild">
            <div className="header d-flex align-items-center justify-content-between  j py-2 px-4">
                <h3 className='m-0 fs-4'>Account Handler</h3>
                <span>
                    <img src={logo} alt='logo' style={{ width: "100%", height: "100%" }} className="object-fit-cover rounded-circle" />
                </span>
            </div>
        </div>
        
    )
}
