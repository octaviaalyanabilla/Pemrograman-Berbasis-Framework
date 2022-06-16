import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
<head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link></head>
export default function Footer(){
    return(
        <div className="footer">
            <p>copyright @2020</p>
            <div className="social">
                <FontAwesomeIcon icon={faFacebook} className="fa" />
                <FontAwesomeIcon icon = {faInstagram} className="fa" />
            </div>
            
        </div>
    )
}