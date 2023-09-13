import { useEffect, useState } from "react"
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';








export default function Blogs({handleClick,handleReadingTime}) {

const [blogs,setBlogs] =useState([]);


useEffect(()=>{


     fetch('data.json')
 .then(res=>res.json())
 .then(data => setBlogs(data))
},[])


  return (

    <div>

      <h1>blogs:{blogs.length}</h1>  
      {
         blogs.map((blog,idx) =><Blog
          key={idx} 
          
          handleClick={handleClick} 
           blog={blog}
           
           handleReadingTime={handleReadingTime}
           
           ></Blog>)
      }
    </div>
  )
}



Blogs.propTypes = {
  
  handleClick: PropTypes.func,
  handleReadingTime: PropTypes.func
};