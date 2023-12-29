import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";
import Homepage from "./components/Homepage.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Homepage>
        <button id="calltoaction-button" className="text-white">
          Shop Now
        </button>
      </Homepage>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
