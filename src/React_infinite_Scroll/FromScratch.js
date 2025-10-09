
import React,{useEffect,useState} from 'react'

import './FromScratch.css'
import ProductCard from './ProductCard';

const FromScratch = ({products,fetchData,loading,error}) => {
    const [page,setPage] = useState(1);


    // Normal Scroll

    // const handleScroll = () => {
    //     const bottom = Math.ceil(window.innerHeight - window.scrollY) >= document.documentElement.scrollHeight - 200;

    //     if(bottom){
    //         setPage((prevPage)=>{
    //             const nextPage = prevPage + 1;
    //             fetchData(nextPage)
    //             return nextPage
    //         })
    //     }
    // }

    // Scroll with debounce

    const debounce = (func,delay) => {
        let timeoutId;

        return function(...args){
            clearTimeout(timeoutId)

            timeoutId = setTimeout(()=>{
                func.apply(this,args)
            },delay)
        }

    };
    const handleScroll = debounce(() => {
        const bottom =
          Math.ceil(window.innerHeight + window.scrollY) >=
          document.documentElement.scrollHeight - 200;
      
        if (bottom) {
          setPage((prevPage) => {
            const nextPage = prevPage + 1;
            fetchData(nextPage);
            return nextPage;
          });
        }
      }, 300);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <div>
        <div className='product_list'>
            {products.map(
                (product,index) => {
                    console.log(product)
                    return <ProductCard product={product} key={product.id} />     
                }
            )}
            
        </div>
        {loading && <p>Loading....</p>}
        {error && <p>Error : {error.message}</p>}

    </div>
  )
}

export default FromScratch