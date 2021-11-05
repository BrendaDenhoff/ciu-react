import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';

const Producto = ({producto, productos, changuito, agregarProducto}) => {

    const {id, articulo, precio} = producto

    //funcion para agregar producto al changuito
    const selecionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...changuito, producto]);
        console.log(changuito);
    }

    //FALTA COMPLETAR
    const eliminarProducto = (id) => {
        //Me quedo con los productos que no son el quee stoy borrando
        const productos = changuito.filter(producto => producto.id !== id);
        agregarProducto(productos)
    }

    return (
        <Fragment>
            <div>
                <h3>{id}-{articulo}-{precio}</h3>
                {
                    productos
                    ?
                        <button
                            type="button"
                            onClick={() => selecionarProducto(id)}
                        >Comprar</button>
                    :
                        <button
                            type="button"
                            onClick={() => eliminarProducto(id)}
                        >Eliminar</button>
                }
            </div>
        </Fragment>
     );
}
 
export default Producto;