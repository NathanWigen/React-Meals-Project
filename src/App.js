import { useState } from "react";
import Cart from "./componets/Cart/Cart";
import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App(props) {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true)
  }

  const hideCardHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCardHandler}/>}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
