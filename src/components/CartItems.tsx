import React from 'react'
import {ICartItems} from "../interfaces";
import {Link} from "react-router-dom";

export type Cart = {
    cart: ICartItems,
}

interface TypesFuncAdd extends Cart {
    onAddItems: (obj:ICartItems) => void
}

export const CartItems:React.FC<TypesFuncAdd> = ({cart, onAddItems}) => {
    const [availableTypes, setAvailableTypes] = React.useState<number>(0)

    const AddToCartItems = ():void => {
        const obj = {
            id:cart.id,
            name:cart.name,
            price:cart.price,
            count:cart.count,
            types:colors[availableTypes]
        }

        onAddItems(obj)
    }

    const colors:Array<string> = ['Default', 'Red', 'Blue', 'Green']

    const changeAvailableHandler = (index: number):void => {
        setAvailableTypes(index)
    }

    return (
        <div className='card mb-3 text-center ms-2 me-2' style={{width:'18rem'}}>
            <div className="card-body">
                <Link className='text-decoration-none text-black' to={`/details/${cart.id}`}>
                    <h3>{cart.name}</h3>
                </Link>
                <p>{cart.price.toLocaleString("en-de")}$</p>
                <div className='mt-3 mb-3'>
                    {colors.map((item:string, index:number) => (
                        <button
                            onClick={() => changeAvailableHandler(index)}
                            key={item}
                            className={availableTypes === index ? `btn mb-2 me-2 btn-dark` : `btn mb-2 me-2 btn-secondary`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button onClick={AddToCartItems} className='btn btn-danger'>Add To Cart</button>
            </div>
        </div>
    )
}