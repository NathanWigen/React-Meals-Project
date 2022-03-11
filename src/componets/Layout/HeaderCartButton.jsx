import React, {useContext, useEffect, useState} from "react";
import CardIcon from "../Cart/CardIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const [BtnIsHighLighted, setBtnIsHighLighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numberOfCardItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)



  const btnClasses = `${classes.button} ${BtnIsHighLighted ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighLighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false)
    }, 300)
    
    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
  );
}
