
import React,{useState} from 'react'
import {List} from 'react-window'
import {InfiniteLoader} from "react-window-infinite-loader";
import ProductCard from './ProductCard';


function WithReactWindow({fetchData,products,totalProducts,loading}) {
    const [page,setPage] = useState(1)
    const hasNextPage = totalProducts > products.length

    const handleLoadMoreData = () => {
        if(loading){
            return
        }
        setPage((prevPage)=> {
            const nextPage = prevPage + 1
            fetchData(nextPage);
            return nextPage
        })
    }

    const isItemLoaded = (index) => !hasNextPage || index < products.length
    const Row = ({ index, style }) => {
  
        const isItemLoaded = (i) => i < 50; 
        const row = (index,style) =>
        {return (
          <div style={style}>
            {isItemLoaded(index) ? (
              <ProductCard product={products[index]} />
            ) : (
              <div className="loading-placeholder">
                  Loading item...
              </div>
            )}
          </div>
        );}
      };
  return (
    <div>
         <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={hasNextPage ? products.length + 1 : products.length}
      loadMoreItems={handleLoadMoreData}
    >

{({ onItemsRendered, ref }) => (
        <List
          height={window.innerHeight}
          itemCount={products.length}
          itemSize={600}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={450}
        >
          {Row}
        </List>
      )}
    </InfiniteLoader>



        </div>
  )
}

export default WithReactWindow