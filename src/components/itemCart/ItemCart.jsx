import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);

    const {id} = item
  return (
    <div className='table d-flex justify-content-end'>
        <table>
            
                <tr>
                    <td scope="row"><img className='cart-product-img' src={item.img}/></td>
                    <th>{item.title}</th>
                    <td>{item.price}</td>
                    <td> {item.amount}</td>
                </tr>
            
        </table>
        <button onClick={() => addItemToCart(item)} type="button" className="btn btn-success p-0 m-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></button>
        <button onClick={() => deleteItemToCart(item)} type="button" className="btn btn-danger p-0 mb-3 mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
    </div>
  )
}

export default ItemCart