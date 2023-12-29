import { useRef, useContext, useState, useEffect } from "react";
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

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `shadow-md w-full fixed top-0 left-0 z-50 bg-stone-800 ${
    scrollY > 50 ? "bg-opacity-50" : "bg-opacity-100"
  } transition-all duration-500 ease-in`;

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />

      {/* className="fixed left-0 right-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100" */}
      <div className={headerClasses}>
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center 
      text-white font-title"
          >
            <span className="w-14 md:items-center mr-4">
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
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              isMobileMenuOpen ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:mr-8 md:hover:border-b-2 text-l md:my-0 my-7"
              >
                <a
                  href={link.link}
                  className=" font-bold text-white duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <button
              onClick={handleOpenCartClick}
              className="flex md:items-center bg-orange-800 rounded px-4 py-2 text-white hover:bg-orange-900"
            >
              <ion-icon name="cart-outline" size="large"></ion-icon>
              <span className="ml-2">({cartQuantity})</span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
