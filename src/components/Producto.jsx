import React from 'react'

const Producto = ({producto}) => {
    return (
        <h3>{producto.id}{producto.articulo}{producto.precio}</h3>
     );
}
 
export default Producto;