import React from 'react'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {clearCart, minusCartItem, plusCartItem, removeToCart} from "../redux/actions/action-cart";
import {ICartItems} from "../interfaces";
import { useCart } from '../hooks/useCart';

export const Cart:React.FC = () => {
    const cart = useTypedSelector<ICartItems[]>(({cart}) => cart.cart)
    const dispatch = useDispatch()
    const {totalPrice} = useCart()
    console.log(totalPrice);
    

    const removeHandlerCart = (id:number):void => {
        dispatch(removeToCart(id))
    }

    const clearCartHandler = ():void => {
        dispatch(clearCart())
    }

    const plusCartHandler = (id:number):void => {
        dispatch(plusCartItem(id))
    }

    const minusCartHandler = (id:number):void => {
        dispatch(minusCartItem(id))
    }

    return (
        <div className='container'>
            {cart.length ? <>
                {cart.map((item:ICartItems, index:number) => (
                    <div className='border border-dark mt-5 p-3 d-flex align-items-center justify-content-between' key={item.id}>
                        <div>
                            <h1>{item.name} : {item.types ? item.types : 'TypeNone'}</h1>
                            <p className='fs-4'>{item.price.toLocaleString("en-de")} $</p>
                            <div className='d-flex align-items-center'>
                                <button onClick={() => plusCartHandler(item.id)} className='btn btn-primary'>+</button>
                                <span>{item.count}</span>
                                <button onClick={() => minusCartHandler(item.id)} className='btn btn-primary'>-</button>
                            </div>
                        </div>
                        <span onClick={() => removeHandlerCart(item.id)} style={{cursor:'pointer'}} className='fs-5'>&times;</span>
                    </div>
                ))}
                <div className='d-flex align-items-center justify-content-between mb-4'>
                    {cart.length ? <button onClick={clearCartHandler} className='btn mt-3 btn-danger'>Clear Cart</button> : ''}
                    <span className='fs-5'>Total: {totalPrice.toLocaleString("en-de")} $</span>
                </div>
            </> : <h1>Cart Empty</h1>}
        </div>
    )
}