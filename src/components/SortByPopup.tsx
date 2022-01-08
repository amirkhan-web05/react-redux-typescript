import React from 'react'

type TypeObject = {
    name:string,
    type:string
    order:string
}

type TypeSortBy = {
    items:TypeObject[],
    activeSortType:string,
    onClickSortType: (items:TypeObject) => void;
}

export const SortByPopup:React.FC<TypeSortBy> = ({items, onClickSortType, activeSortType}) => {
    const activeLabel = items.find((obj:TypeObject) => obj.type === activeSortType)?.name;
    const sortRef = React.useRef<HTMLHeadingElement>(null);
    const [open, setIsOpen] = React.useState<boolean>(false)

    const handlerChangeOpen = ():void => {
        setIsOpen(!open)
    }

    const handleOutsideClick = (event:MouseEvent | any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setIsOpen(false);
        }
    };

    const onSelectItem = (sortType:TypeObject) => {
        if (onClickSortType) {
            onClickSortType(sortType);
        }
        setIsOpen(false)
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
            <div ref={sortRef} className="dropdown-block">
                <button onClick={handlerChangeOpen} className="dropbtn">{activeLabel}</button>
                {open ? <ul id="myDropdown" className="dropdown-content">
                    {items.map((item:TypeObject, index) => (
                       <li
                           key={index}
                           className={activeSortType === item.type ? 'active' : 'dropdown-item'}
                           onClick={() => onSelectItem(item)}
                       >
                           {item.name}
                        </li>
                        ))}
                </ul> : ''}
            </div>
    )
}