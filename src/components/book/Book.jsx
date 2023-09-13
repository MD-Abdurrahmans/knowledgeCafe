

import PropTypes from 'prop-types'










export default function Book({BookMark}) {

    const {Title} =BookMark;
   console.log("hi", BookMark)
 
  return (
    <div>
          <div className=" bg-white p-4  m-4 ">
                
                    <h3 className=" capitalize">
              
             {Title}
                    </h3>

                  
                

         
            </div>
    </div>
  )
}


Book.propTypes = {

    BookMark:PropTypes.obj
}