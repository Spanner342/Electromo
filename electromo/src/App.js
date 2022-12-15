import React ,{useState , useRef} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from './components/Main/Main';
import Products from './components/Products/Products';
import { ViewWidget } from './components/ViewWidget/ViewWidget';
import About from './components/About/About';
import Privacy from './components/Privacy/Privacy';




export const AppContext = React.createContext();

function App() {
	const [products, setProducts] = useState([]);

	const [currentProduct, setCurrentProduct] = useState({})

	const [cart, setCart] = useState([]);

	const [prodElem, setProdElem] = useState({})

	const [viewActiv, setViewActive] = useState(false)

	const ulElem = useRef();

	

	function getData() {
		if (products.length !== 0) return;
	
		let localData = localStorage.getItem("data");
		if (localData) localData = JSON.parse(localData);
		if (localData && localData.length > 0) {
		  setProducts([...localData]);
		  return;
		}
	
		fetch("https://fakestoreapi.com/products/")
		  .then((response) => {
			return response.json();
		  })
		  .then((result) => {
			setProducts([...result]);
			localStorage.setItem("data", JSON.stringify(result));
		  });
	  }

	  function getCart() {
        if (cart.length !== 0) return;

        let localCart = localStorage.getItem('cart');
        if (localCart) localCart = JSON.parse(localCart);
        if (localCart && localCart.length > 0) {
            setCart([...localCart]);
            return;
        }
    }

	function addCart(id) {
        let cartTmp = cart;

        if (cartTmp.indexOf(id) !== -1) {
            cartTmp = cartTmp.filter(item => item !== id);
        } else {
            cartTmp.push(id);
        }

        setCart([...cartTmp]);
        localStorage.setItem('cart', JSON.stringify(cartTmp));
		
    }

	  getData();
	  getCart();

	return (
	<div className="app">
		<AppContext.Provider value={{products, setProducts, ulElem, cart, setCart, addCart, setViewActive, viewActiv, currentProduct, setCurrentProduct, prodElem, setProdElem}}>
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main/>}></Route>
				<Route path="/product/:id/" element={<Products />}></Route>
				<Route path='/About/' element={<About />}></Route>
				<Route path='/Privacy/' element={<Privacy />}></Route>
			</Routes>
			<Footer/>
			<ViewWidget />
		</Router>
		</AppContext.Provider>
	</div>
	);
}

export default App;