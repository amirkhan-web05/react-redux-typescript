import React from 'react'
import {ICartItems} from "../interfaces";
import {CartItems} from "../components/CartItems";
import {fetchCars, fetchFiltered, fetchSortBy} from "../redux/actions/action-cars";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setPaginate} from "../redux/actions/action-paginate";
import {CartNumber} from "../components/CartNumber";
import {Categories} from "../components/Categories";
import {setCategories, setSortBy} from "../redux/actions/action-filtered";
import {addToCart} from "../redux/actions/action-cart";
import {Loaded} from "../components/Loaded";
import {SortByPopup} from "../components/SortByPopup";

type TypeObject = {
    name:string,
    type:string
    order:string
}

export const Home:React.FC = () => {
    const dispatch = useDispatch()

    const cars = useTypedSelector<ICartItems[]>(({cars}) => cars.items)
    const currentPage = useTypedSelector<number>(({paginate}) => paginate.currentPage)
    const perPage = useTypedSelector<number>(({paginate}) => paginate.perPage)
    const filtered = useTypedSelector<string | null>(({filtered}) => filtered.categories)
    const sortByItems = useTypedSelector<any>(({filtered}) => filtered.sortBy)
    const loaded = useTypedSelector<boolean>(state => state.cars.loaded)
    const [value, setValue] = React.useState<string>('')

    const pages:Array<number> = [1,2,3,4,5,6,7,8]
    const categories:Array<string> = ['BMW', 'Mercedes', 'Audi', 'Mazda', 'Skoda', 'Ram', 'Nissan', 'Porsche']

    const sortItems:TypeObject[] = [
        {name:'Popular', type:'popular', order: 'desc'},
        {name:'Price', type:'price', order:'desc'},
        {name: 'alphabet', type: 'name', order: 'asc'},
    ];

    const setCurrentPages = (page:number) => {
        dispatch(setPaginate(page))
    }

    const setCategoriesItems = (items:string | null) => {
        dispatch(setCategories(items))
    }

    React.useEffect(() => {
        dispatch(fetchCars(currentPage, perPage))
    }, [currentPage])

    React.useEffect(() => {
        dispatch(fetchFiltered(filtered))
    }, [filtered])

    React.useEffect(() => {
        dispatch(fetchSortBy(sortByItems))
    }, [sortByItems])

    const changeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const filteredCars = cars.filter((item:ICartItems) => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })


    const onSelectSortType = (item:any) => {
        dispatch(setSortBy(item))
    }

    const handlerToCart = (cart:ICartItems) => {
        dispatch(addToCart(cart))
    }

    return (
        <div className={'container'}>
            <div className='d-flex align-items-center justify-content-between mt-3'>
                <input value={value} onChange={changeInput} className='ms-5 w-50' placeholder='Search...' type="text"/>
                <Categories
                    activeCategory={filtered}
                    onClickCategories={setCategoriesItems}
                    items={categories}
                />
                <SortByPopup
                    activeSortType={sortByItems.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <div className='d-flex align-items-center justify-content-center items__card flex-wrap mt-5'>
                {loaded ? filteredCars.map((item => (
                    <CartItems onAddItems={handlerToCart} key={item.id} cart={item}/>
                ))) : <Loaded/>}
            </div>
            <div className="d-flex justify-content-center align-items-center items__number">
                <CartNumber items={pages} currentPage={currentPage} onClickPage={setCurrentPages} />
            </div>
        </div>
    )
}