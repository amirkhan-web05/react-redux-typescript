import React from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

export type TypeShow = {
    show?:boolean
    onClose?: () => void;
}

export type IFormInput = {
    firstName: string;
    lastName: string;
}

export const Modal:React.FC<TypeShow> = ({show, onClose}) => {
    const [data, setData] = React.useState<IFormInput>({firstName:'', lastName:''});
    const navigate = useNavigate()

    const setValues = <T extends IFormInput>(values:T):void => {
        setData(prevData => ({
            ...prevData,
            ...values
        }))
    }

    const { register, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            firstName:data.firstName,
            lastName:data.lastName
        },
        mode:'onBlur'
    });
    const onSubmit: SubmitHandler<IFormInput> = (data:IFormInput) => {
        navigate('./')
        setValues(data);
        console.log(data)
    }

    return (
        <>
            {show ? (
                <div className='popup'>
                    <div className="popup__inner p-4">
                        <div className='d-flex align-items-center justify-content-between'>
                            <h1>Modal</h1>
                            <span onClick={onClose} className='icon__close fs-5'>&times;</span>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="popup__input text-center">
                            <div>
                                <input
                                    {...register("firstName")}
                                    placeholder='First Name'
                                    className='w-50 mb-3'
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    {...register("lastName")}
                                       placeholder='Last Name'
                                       className='w-50 mb-3'
                                       type="text"
                                />
                            </div>
                            <button className='w-50 m-auto btn btn-danger' type='submit'>Registration</button>
                        </form>
                    </div>
                </div>
            ) : ''}
        </>
    )
}