import React from 'react'

type IPages = {
    items:Array<number>
    currentPage:number,
    onClickPage: (items:number) => void;
}

export const CartNumber:React.FC<IPages> = ({items, currentPage, onClickPage}) => {
  return (
      <>
          {items.map((page:number, index:number) => (
              <span
                  key={index}
                  style={{cursor:'pointer'}}
                  onClick={() => onClickPage(page)}
                  className={page === currentPage ? 'number' : 'default-number'}
              >
                {page}
              </span>
          ))}
      </>
  )
}