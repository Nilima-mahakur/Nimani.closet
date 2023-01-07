import { useEffect, useState } from 'react'
import './Cartlist.css'



function Cartlist ({cart}) {
const [CART, setCART] = useState([])
useEffect(()=>{
    setCART(cart)
}, [cart])

    return(
        <div>
          
            {CART.map((cartItem, CartIndex)=>{
                return(
                    <div>
                        <img src={cartItem.productImage} alt="" className='img'/>
                        <span className='title'>{cartItem.name}</span>
                        <button className='button'  onClick={()=>{
                            const cartit = CART.map((item, index)=>{
                                return CartIndex === index ? {...item, quantity: item.quantity >0 ? item.quantity - 1: 0 } : item
                            })
                            setCART(cartit)
                        }}>-</button>
                        <span>{cartItem.quantity}</span>
                        <button className='button' onClick={()=>{
                            const cartit = CART.map((item, index)=>{
                                return CartIndex === index ? {...item, quantity: item.quantity + 1 } : item
                            })
                            setCART(cartit)
                        }}>+</button>
                        <span>Rs.{cartItem.price*cartItem.quantity}</span>
                    
                        </div>
                )
            })} 
            <p className='total'> Total Price: <span></span><p>Rs.</p>
                {CART.map(item=> item.price* item.quantity).reduce((total, value)=> total + value, 0)}
            </p>
        </div>
    )
}
export default Cartlist