import { useSelector } from "react-redux";
import { FormatPrice } from "../../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <div className="flex justify-between items-center text-sm border-b border-base-300 pb-2 font-medium">
          <span>Sub Total</span>
          <span className="font-medium">{FormatPrice(cartTotal)}</span>
        </div>
        {/* SHIPPING */}
        <div className="flex justify-between items-center text-sm border-b border-base-300 pb-2 font-medium">
          <span>Shipping</span>
          <span className="font-medium">{FormatPrice(shipping)}</span>
        </div>
        {/* TAX */}
        <div className="flex justify-between items-center text-sm border-b border-base-300 pb-2 font-medium">
          <span>Tax</span>
          <span className="font-medium">{FormatPrice(tax)}</span>
        </div>
        {/* ORDERTOTAL */}
        <div className="flex justify-between items-center text-lg  pb-2 font-bold mt-5">
          <span>Order Total</span>
          <span className="font-medium">{FormatPrice(orderTotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
