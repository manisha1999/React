import logo from './logo.svg';
import './App.css';
import { useState ,useEffect } from 'react';
import FromScratch from './React_infinite_Scroll/FromScratch';
import WithReactScroll from './React_infinite_Scroll/WithReactScroll';
import WithReactWindow from './React_infinite_Scroll/WithReactWindow';
import WithIntersectionObserver from './React_infinite_Scroll/WithIntersectionObserver';
import { loremIpsum } from 'lorem-ipsum';
import { List } from 'react-virtualized';
import useFetch from './CustomHook/useFetch';
import Modal from './Modal/Modal';
import Form from './FormValidation/Form';
import DynamicForm from './FormValidation/DynamicForm';
import DragAndDrop from './DragAndDrop/DragAndDrop';
import DragAndDropTouch from './DragAndDrop/DragAndDropTouch';
import RegistrationPage from './MultiStepForm/RegistrationPage';
// import Virtualised_List_Component from './Virtualised_List_Component/Virtualised_List_Component';




function App() {

  // const [page,setPage] = useState(1);
  // const [products,setProduct] = useState([]);
  // const [totalProduct,setTotalProduct]= useState(0);
  // const [loading,setLoading] = useState(0);
  // const [error,setError] = useState(null);

  // const fetchData = async(page) => {
  //   try{
  //     const res = await fetch(`https://dummyjson.com/products/?limit=10&skip=${(page - 1) * 10}`)
  //     const data = await res.json()
      
  //     if(res.ok){
  //       setProduct((prevItems)=> [...prevItems,...data.products])
  //       page === 1 && setTotalProduct(()=> data.total);
  //     }
  //     setLoading(false);
  //   }
  //   catch(error){
  //     setLoading(false);
  //     if( error instanceof error){
  //       setError(error)
  //     }
  //   }
  // }
  // useEffect(() => {
  //   let subscribed = true;
  //   (async () => {
  //     if (subscribed) {
  //       await fetchData(1);
  //     }
  //   })();

  //   return () => {
  //     subscribed = false;
  //   };
  // }, []);


  // 2.  React Virtualised List component
//   const rowCount = 5000;
// const listHeight = 400;
// const rowHeight = 50;
// const rowWidth = 700;
// const list = Array(rowCount).fill().map((val,idx)=>{
//   return {
//       id : idx,
//       image : "",
//       text : loremIpsum({
//           count : 1,
//           units :"sentences",
//           sentenceLowerBound : 4,
//           sentenceUpperBound : 8
//       })
//   }
// })
// function renderRow({ index, key, style }) {
//   return (
//     <div key={key} style={style} className="row">
//       <div className="image">
//         <img src={list[index].image} alt="" />
//       </div>
//       <div className="content">
//         <div>{list[index].name}</div>
//         <div>{list[index].text}</div>
//       </div>
//     </div>
//   );
// }

// Custom Hook
// const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts')
// console.log(data)
// if (error) {
//   return <div>Error: {error.message}</div>
// }


// Modal
const [isModalvisible,setisModalvisible] = useState(false)




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
  {/* <WithIntersectionObserver
    products={products}
    fetchData={fetchData}
    loading={loading}
    error={error}
  /> */}


   {/* 2...     Virtualised_List_Component */}
  {/* <div className="App">
      <div className="list">
        <List
          width={rowWidth}
          height={listHeight}
          rowHeight={rowHeight}
          rowRenderer={renderRow}
          rowCount={list.length}
          overscanRowCount={3} />
      </div>
    </div>
    </div> */}


    {/* Custom Hook */}

    
      {/* {data && data.map(post => (
        <div className='posts'>
        <div key={post.id}>
          <h3 style={{textAlign:"center"}}>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        </div>
      ))} */}
    

        {/* Modal */}
        {/* <button className='openbutton' onClick={()=> setisModalvisible(true)}> Open Modal</button>

        {isModalvisible && (
        <Modal onClose={()=>setisModalvisible(false)}/>
          
        ) 
        } */}

       {/* Form Validation */}
       {/* <Form/> */}
       {/* <DynamicForm/> */}


       {/* Drag And Drop */}
       {/* <DragAndDropTouch/> */}


       <RegistrationPage/>
    

    
  </div>
  );
}

export default App;
