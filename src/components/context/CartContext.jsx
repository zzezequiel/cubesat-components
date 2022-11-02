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

  const addItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if(inCart){
      setCartItems(
        cartItems.map((productInCart) =>{
          if(productInCart.id === product.id){
            return {...inCart, amount: inCart.amount + 1}
          }else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, {...product, amount: 1}])
    }
  };
  const deleteItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    //amoun = 1 return all except product.id deleted
    if(inCart.amount === 1){
      setCartItems(
        cartItems.filter(productInCart => productInCart.id !== product.id)
      );
    } else {
      //delete 1 product of the amount
      setCartItems(
        cartItems.map((productInCart) => {
        if(productInCart.id === product.id) {
          return {...inCart, amount: inCart.amount -1}
        }else return productInCart
      })
      );
    }
  };
  return (
    <CartContext.Provider 
    value={{cartItems, addItemToCart, deleteItemToCart}}>
      {children}
    </CartContext.Provider>
  )
}