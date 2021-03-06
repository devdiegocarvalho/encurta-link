import React from 'react';
import './links.css';
import { FiArrowLeft, FiLink2, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Links() {
  return(
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
         <FiArrowLeft size={38} color="#fff"/>
        </Link>        
        <h1>Meus Links</h1>
        </div>

        <div className="links-item">
          <button className="link">
            <FiLink2 size={18} color="#fff"/>
            https://www.2dtech.com.br
          </button>
          <button className="link-delete">
            <FiTrash size={24} color="FF5454"/>
          </button>

        </div>
        <div className="links-item">
          <button className="link">
            <FiLink2 size={18} color="#fff"/>
            https://www.2dtech.com.br
          </button>
          <button className="link-delete">
            <FiTrash size={24} color="FF5454"/>
          </button>

        </div>
    </div>
  )
}