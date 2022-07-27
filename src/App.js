import { useEffect, useState } from 'react';
import './App.css';
import Products from './components/Products';
import Button from './components/Button';
const url = 'https://fakestoreapi.com/products';
function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      const products = await res.json();
      setProducts(products);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main>
      <Products products={products} />
      <Button text='hello' />
    </main>
  );
}

export default App;
