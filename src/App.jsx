
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const  [BookMark,setBookMark] =useState([]);

  const handleClick =(blog)=>{

    const newAdd = [...BookMark,blog]
    setBookMark(newAdd);


  }

 const  [time,setTime] =useState(0);
  const handleReadingTime =(ID,Reading_Time)=>{


     
     const newTime =time + Reading_Time;

     setTime(newTime)

     const remaining = BookMark.filter(book=> book.ID !== ID);
      setBookMark(remaining);
    
  }

  return (
    <>

     <div className='container mx-auto mt-3'>
     <Header></Header>
   
      <div className="flex  ">
   <div className='w-[800px]'>
   <Blogs handleClick={handleClick}  handleReadingTime={handleReadingTime}  ></Blogs>
   </div>
  <div className='w-[500px]'>
  <Bookmarks BookMark={BookMark} time={time} ></Bookmarks>
  </div>

      </div>
     </div>
    </>
  )
}

export default App
