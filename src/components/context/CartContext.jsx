import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const LocalStorageProducts = localStorage.getItem['cartProducts']
      return LocalStorageProducts ? JSON.parse(LocalStorageProducts) : [];
    } catch (error) {
      return []
    }
  })
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    console.log(cartItems)
  }, [cartItems]);

  const addItemToCart = (products) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === products.id
    );
    if(inCart){
      setCartItems(
        cartItems.map((productInCart) =>{
          if(productInCart.id === products.id){
            return {...inCart, amount: inCart.amount + 1}
          }else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, {...products, amount: 1}])
    }
  };
  const deleteItemToCart = (products) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === products.id
    );

    //amoun = 1 return all except products.id deleted
    if(inCart.amount === 1){
      setCartItems(
        cartItems.filter(productInCart => productInCart.id !== products.id)
      );
    } else {
      //delete 1 products of the amount
      setCartItems((productInCart) => {
        if(productInCart.id === products.id) {
          return {...inCart, amount: inCart.amount -1}
        }else return productInCart
      })
    }
  };
  return (
    <CartContext.Provider value={{cartItems, addItemToCart, deleteItemToCart}}>
      {children}
    </CartContext.Provider>
  )
}