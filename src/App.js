import { useEffect, useState } from 'react';
import './App.css';
import Products from './components/products/Products';
import Button from './components/Button';
import Loading from './components/Loading';

const url = 'https://fakestoreapi.com/products';
function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      const products = await res.json();
      setProducts(products);
      setLoading(false);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Products products={products} />
      <Button text='hello' />
    </main>
  );
}

export default App;
