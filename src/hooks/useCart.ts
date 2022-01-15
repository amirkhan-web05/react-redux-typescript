import { useTypedSelector } from "./useTypedSelector";

export const useCart = () => {
  const cartItems = useTypedSelector(({ cart }) => cart.cart);
  const totalPrice = cartItems.reduce(
    (sum, obj) => sum + obj.price * obj.count,
    0
  );

  return {
    totalPrice,
  };
};