
import PropTypes from 'prop-types'
import { } from 'react-icons/fa';
import { BiBookAlt } from "react-icons/bi";
export default function Blog({blog,handleClick,handleReadingTime}) {
//   console.log(blog)
  const {ID,Title,Cover,Author_URL,Author,Hashtag,Reading_Time} = blog;
  return (
 <>
 
 <div>
   <section className="bg-white dark:bg-gray-900 w-full">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
            <div className="w-full">
                <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src={Cover} alt=""/>

                <div>

           
           <div className="flex items-center justify-between">
           <div className="flex items-center mt-6">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src={Author_URL} alt=""/>

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">{Author}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                    </div>

          
                <div className='flex items-center '>
                <p className='pr-3'>{Reading_Time}   min Read</p>
                 <p  onClick={()=>handleClick(blog)}   className='cursor-pointer text-2xl text-orange-700'> <BiBookAlt></BiBookAlt></p>
                </div>
           </div>
                
                    <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                       {Title}
                    </h1>

             <span className='mt-5'>{Hashtag}</span>

              <h6  onClick={()=>handleReadingTime(ID,Reading_Time)}  className='cursor-pointer underline  text-cyan-600  font-medium'>Mark as read</h6>
                </div>
            </div>

           

        </div>
    </div>
</section>
    </div>
 
 </>
  )
}


Blog.propTypes = {

    blog: PropTypes.object,
    handleClick: PropTypes.fun,
    handleReadingTime: PropTypes.fun
}