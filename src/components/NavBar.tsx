import React from 'react'
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ICartItems} from "../interfaces";
import {Modal} from "./Modal";

export const NavBar:React.FC = () => {
 const cart = useTypedSelector<ICartItems[]>(({cart}) => cart.cart)
 const [show, setShow] = React.useState<boolean>(false)

 const handlerShowModal = ():void => {
     setShow(!show)
 }

 return (
     <nav className='nav d-flex justify-content-between align-items-center '>
         <NavLink className='text-decoration-none m-2 fs-3' to="/">
             Home
         </NavLink>
         <h3 onClick={handlerShowModal} className='registration text-light'>Registration</h3>
         <Modal onClose={handlerShowModal} show={show}/>
         <NavLink className='text-decoration-none m-2 fs-3' to="/cart">
             Cart:{cart.length}
         </NavLink>
     </nav>
 )
}