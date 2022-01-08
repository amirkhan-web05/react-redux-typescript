import React from 'react'

type TypeCategories = {
    readonly items:Array<string>
    onClickCategories:(item:string | null) => void
    activeCategory:string | null
}

export const Categories:React.FC<TypeCategories> = ({items, onClickCategories, activeCategory}) => {
    return (
        <ul className='d-flex align-items-center items mt-2'>
            <li onClick={() => onClickCategories(null)} className={activeCategory === null ? `me-4 bg-dark text-white items__list` : 'me-4 bg-white text-dark items__list'}>All</li>
            {items.map((item:string, index:number) => (
                <li
                    key={index}
                    onClick={() => onClickCategories(item)}
                    className={activeCategory === item ? `me-4 bg-dark text-white items__list` : 'me-4 bg-white text-dark items__list'}
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}