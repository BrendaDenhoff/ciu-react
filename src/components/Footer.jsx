import React from 'react'

const Footer = () => {

    const fecha = new Date().getFullYear()

    return ( 
        <h2>GAMA - Año {fecha}</h2>
     );
}
 
export default Footer;