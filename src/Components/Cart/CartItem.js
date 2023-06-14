import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = props.price * props.amount;
  const removeCartItemHandler = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
    };
    cartCtx.removeItem(item);
  };
  return (
    <tr className={classes["cart-data"]} onClick={removeCartItemHandler}>
      <td>{props.name}</td>
      <td>{props.amount}</td>
      <td>{price}</td>
    </tr>
  );
};
export default CartItem;
