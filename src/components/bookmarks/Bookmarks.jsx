import Book from "../book/book";
import PropTypes from 'prop-types'


export default function Bookmarks({BookMark,time}) {

console.log(BookMark)
// console.log(time)
  return (

    <div>
      
     <h1 className="text-2xl  text-blue-700 text-center mb-4 bg-[#1111110D] p-4">Spent time on read : {time} min</h1>  
    
    <div className=" text-center bg-[#1111110D] p-5">
    <h1 className="font-bold text-2xl bg-">Bookmarked Blogs:{BookMark.length}</h1>
    {
        BookMark.map((mark,idx)=> <Book key={idx} BookMark={mark} ></Book> )

       
       }
      </div>
        {/*  */}
    

    </div>

  )
}


Bookmarks.propTypes = {

    BookMark:PropTypes.obj,
    time: PropTypes.number
}