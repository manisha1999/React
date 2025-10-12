import logo from './logo.svg';
import './App.css';
import { useState ,useEffect } from 'react';
import FromScratch from './React_infinite_Scroll/FromScratch';
import WithReactScroll from './React_infinite_Scroll/WithReactScroll';
import WithReactWindow from './React_infinite_Scroll/WithReactWindow';
import WithIntersectionObserver from './React_infinite_Scroll/WithIntersectionObserver';



function App() {
  const [page,setPage] = useState(1);
  const [products,setProduct] = useState([]);
  const [totalProduct,setTotalProduct]= useState(0);
  const [loading,setLoading] = useState(0);
  const [error,setError] = useState(null);

  const fetchData = async(page) => {
    try{
      const res = await fetch(`https://dummyjson.com/products/?limit=10&skip=${(page - 1) * 10}`)
      const data = await res.json()
      
      if(res.ok){
        setProduct((prevItems)=> [...prevItems,...data.products])
        page === 1 && setTotalProduct(()=> data.total);
      }
      setLoading(false);
    }
    catch(error){
      setLoading(false);
      if( error instanceof error){
        setError(error)
      }
    }
  }
  useEffect(() => {
    let subscribed = true;
    (async () => {
      if (subscribed) {
        await fetchData(1);
      }
    })();

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <div className="App">
      {/* <FromScratch
        products={products}
        fetchData={fetchData}
        loading={loading}
        error={error}
      /> */}
      {/* <WithReactScroll
    products={products}
    fetchData={fetchData}
    totalProduct={totalProduct}/> */}
    {/* <WithReactWindow
    products={products}
    fetchData={fetchData}
    totalProduct={totalProduct}
    loading={loading}
  /> */}
  <WithIntersectionObserver
    products={products}
    fetchData={fetchData}
    loading={loading}
    error={error}
  />
    </div>
  );
}

export default App;
