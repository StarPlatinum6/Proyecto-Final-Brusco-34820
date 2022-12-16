import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const CartWidget = (props) => {

  const { totalQty } = useContext(CartContext)

  return (
    <>
      <button className={props.className}>
        {totalQty
          ? <p className="text-indigo-600 px-1 py-1 font-serif font-semibold text-2xl mb-7 -ml-1 animate-bounce z-50 w-8 absolute">{totalQty}</p>
          : ""
        }
        <img
          src={"/images/cart2.svg"}
          alt="img-cart"
          className="w-12 px-1 py-1"
        />
      </button>
    </>
  );
};

export default CartWidget;