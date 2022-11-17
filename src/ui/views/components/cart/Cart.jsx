import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { CartContext } from '../../utils/context/CartContext'
import ItemCart from './itemCart/ItemCart';
import accounting from "accounting"
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Cart = () => {
  //set cartOpen, always start in false (close)
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

const { cartItems, deleteAllCart } = useContext(CartContext);

useEffect(() => {
  setProductsLength(
    //reduce() return the sum of all the elements in an array
    cartItems.reduce(
      (prev, current)=> prev + current.amount, 0)
  );
}, [cartItems])

const total = cartItems.reduce(
  (prev,current)=> prev + current.amount * current.price, 0
);

  return (
                <div className='sticky-top text-end mx-5'>


                    <div className='btn' onClick={()=> setCartOpen(true)}>
                    {!cartOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="49" fill="green" className="bi bi-bag-check" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                  
                    ):(
                      <svg xmlns="http://www.w3.org/2000/svg" width="49" fill="green" className="bi bi-bag-check" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    
                    )} 

                    {!cartOpen && <div className='mt-1 me-1 fs-4'>{productsLength}</div>}
                    
                    </div>



                    {cartItems && cartOpen && (
                      <Modal
                      size="lg"
                      show={cartOpen}
                      onHide={() => setCartOpen(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                      >


                        <Modal.Header closeButton>
                                  <Modal.Title id="example-modal-sizes-title-lg">
                                    CART
                                  </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {cartItems.length === 0 ? (
                          <p>Your cart is empty</p>
                        ):(
                            <div>

                              {cartItems.map((item, i)=>(
                                <ItemCart key={i} item={item} />
                              ))}

                              
                                  
                              

                            </div>

                        )}

                        <h2 className='text-center'>Total: {accounting.formatMoney(total,{symbol:"€", format:"%v %s"})}</h2>
                        <div className='d-flex justify-content-between'>
                          <div className=''>
                          <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id="button-tooltip-2">Delete all cart</Tooltip>}
                              >
                            <button onClick={() => deleteAllCart(cartItems)} className="btn p-2 pt-1 px-5 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="95" fill="currentColor" className="delete-all bi bi-x-octagon-fill" viewBox="0 0 16 16">
                                      <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                                    </svg>
                            </button>
                            </OverlayTrigger>
                          </div>
                          <div className=''>
                            <Link to="/singin" className="btn p-2 pt-1 px-5 ">
                                  <p className='checkout '>Checkout</p>
                            </Link>
                          </div>
                        </div>
                        </Modal.Body>
                      </Modal>
                    )}


                </div>
  ) 
  
}

export default Cart