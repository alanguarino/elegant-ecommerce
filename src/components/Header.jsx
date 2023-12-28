import { useRef, useContext } from "react";
import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header className="w-full fixed bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100 min-w-screen shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="logo.png" alt="Elegant model" className="w-8 h-auto" />
              <div>
                <h1 className="text-xl font-bold">
                  Elegant <Shop></Shop>
                </h1>
                <p className="text-sm text-gray-300">Your first choice</p>
              </div>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <button
              onClick={handleOpenCartClick}
              className="bg-yellow-400 rounded px-4 py-2 text-gray-800 hover:bg-yellow-500"
            >
              Cart ({cartQuantity})
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
