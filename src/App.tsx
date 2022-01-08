import React from 'react';
import {Home} from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Cart} from "./pages/Cart";
import {Header} from "./components/Header";
import {Details} from "./components/Details";
import {Modal} from "./components/Modal";

const App:React.FC = () => {
    return (
        <Router>
            <Header/>
         <Routes>
             <Route element={<Home/>} path={'/'}/>
             <Route element={<Cart/>} path={'/cart'}/>
             <Route element={<Details/>} path={'/details/:id'}/>
             <Route element={<Modal/>} path='/email'/>
         </Routes>
        </Router>
    )
}

export default App;
