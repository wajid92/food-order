import Header from "./components/Layout/Header";
import React,{ useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
    const [cartIsShowm,setCartIsShown]=useState(false);

    const showCardHandler=()=>{
        setCartIsShown(true);
    };
    const hideCardHandler=()=>{
        setCartIsShown(false);
    };
    return (
        <CartProvider>
            {cartIsShowm && <Cart onClose={hideCardHandler} />}
            <Header onShowCart={showCardHandler}/> 
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;