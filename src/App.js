import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    disptach(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
