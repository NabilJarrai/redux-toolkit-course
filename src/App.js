import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import { store } from "./store";

function App() {
  const cartItems = useSelector((state) => state.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
