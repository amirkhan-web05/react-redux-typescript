import React from 'react'
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/actions/action-cart";
import {ICartItems} from "../interfaces";
export const Details:React.FC = () => {
    const {id} = useParams<string>()
    const cart = useTypedSelector<ICartItems[]>(({cars}) => cars.items)
    const dispatch = useDispatch()

    const details = cart.filter(item => {
        return Number(item.id) === Number(id)
    })

    const handlerAddToCart = (cart:ICartItems):void => {
        dispatch(addToCart(cart))
    }

    return (
        <div className={'container'}>
            {details.map((item, index) => (
                <div key={item.id}>
                    <div className='details border border-info w-50 p-3 mt-5' key={item.id}>
                        <h1 className='details__title text-danger'>{item.name}</h1>
                        <span className='details__price'>{item.price.toLocaleString("en-de")} $</span>
                    </div>
                    <button onClick={() => handlerAddToCart(item)} className='btn mt-4 btn-danger'>
                        Add to Cart
                    </button>
                    </div>
                ))}
            </div>
        )
}
