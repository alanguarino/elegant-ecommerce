import { useRef, useContext, useState } from "react";
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

  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />

      {/* className="fixed left-0 right-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100" */}
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <span className="w-8 h-8 md:items-center mt-2 mr-4">
              <img
                src="logo.png"
                alt="Elegant model"
                // className="w-8 h-8 md:items-center mt-2 mr-4"
              />
            </span>
            Elegant Shop
          </div>

          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={isMobileMenuOpen ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              isMobileMenuOpen ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:mr-8 md:hover:border-b-2 text-xl md:my-0 my-7"
              >
                <a href={link.link} className="text-gray-800 duration-500">
                  {link.name}
                </a>
              </li>
            ))}

            <button
              onClick={handleOpenCartClick}
              className="flex md:justify-between bg-yellow-400 rounded px-4 py-2 text-gray-800 hover:bg-yellow-500"
            >
              Cart ({cartQuantity})
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
