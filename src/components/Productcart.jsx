import './Productcart.css'
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';


export const Productcart = ({product}) => {
  const {id,name, price, image} = product;
  const {addToCart,removeFromCart,cartList} = useCart();
  const [isInCart, setisInCart] = useState(false)

  useEffect(() => {
    const itemIsInCart = cartList.find(cartItem => cartItem.id === id);
    if(itemIsInCart){
      setisInCart(true);
    }else{
      setisInCart(false);
    }
  }, [cartList, id])

  return (
    <div className='productCard'>

      <img src = {image} alt = {name} />
      <p className='name'>{name}</p>

      <div className="action">
        <p>{price}</p>
        {isInCart ? (<button className='remove' onClick={() => removeFromCart(product)}>Remove</button>) : (<button onClick={() => addToCart(product)}>Add to cart</button>)}
      </div>
      
    </div>
  )
}

 
