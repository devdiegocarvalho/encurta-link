import React from "react";
import './menu.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://www.linkedin.com/in/devdiegocarvalho/">
                <BsLinkedin size={24} color="#fff"/>
            </a>
            <a className="social" href="https://www.instagram.com/diegocarvalho.2d/">
                <BsInstagram size={24} color="#fff"/>
            </a>
            <Link className="menu-item" to="/links">
            Meus Links
            </Link>
        </div>
    )
}
