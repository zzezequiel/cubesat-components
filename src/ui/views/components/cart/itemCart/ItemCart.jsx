import React, { useContext } from 'react'
import { CartContext } from '../../../utils/context/CartContext'
import { useState } from '../../../utils/context/CartContext';

const ItemCart = ({item, }) => {
    const {deleteItemToCart, addItemToCart, deleteItemCart} = useContext(CartContext);
    

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
        <button onClick={() => deleteItemToCart(item)} type="button" className="btn btn-success p-0 m-3 me-0"><svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg></button>
<button onClick={() => addItemToCart(item)} type="button" className="btn btn-success p-0 m-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></button>
        <button onClick={() => deleteItemCart(item)} type="button" className="btn btn-danger p-0 mb-3 mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
    </div>
  )
}

export default ItemCart