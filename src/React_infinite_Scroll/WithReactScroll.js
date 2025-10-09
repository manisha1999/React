import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ProductCard from './ProductCard';

function WithReactScroll({products,fetchData,totalProduct}) {
 const [page,setPage] = useState(1)

    const handleLoadMoreData = () => {
        setPage((prevPage) =>
            {const nextPage = prevPage+1;
                fetch(nextPage)
            return nextPage;
        }
        )
    }
  return (
    <div>
        <InfiniteScroll
      dataLength={products.length}
      next={handleLoadMoreData}
      hasMore={totalProduct > products.length}
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
    >

    <div className='products-list'>
            {
                products.map((item)=>{
                    return <ProductCard product={item} key={item.id}/>
                })
            }
    </div>
    </InfiniteScroll>

    
    </div>
  )
}

export default WithReactScroll