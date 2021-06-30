import CartIcon from "../Cart/CartIcon";
import classes from "./HeardCardButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const HeaderCardButton = (props) => {

  const cartCtx = useContext(CartContext);
  const numberOfCartItems =cartCtx.items.reduce((currNumbver,item)=>{
    return currNumbver+item.amount;
  },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
