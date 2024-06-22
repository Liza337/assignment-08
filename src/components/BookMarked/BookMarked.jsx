import React from 'react';
import './BookMarked.css';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookMarked = ({bookMarked,time}) => {
  console.log(time);
  console.log(bookMarked);
  let totalTime=0;
  for( const i of time){
    totalTime=totalTime+i;
  }
  
    
    

    return (
        <div className='read-blog'>
           
          <div className='read-time'>
            <h3>Spent time on read :{totalTime}</h3>
          </div>

          <div className='bookmarked'>
            <h3>Bookmarked Blogs : {bookMarked.length}</h3>
                
              {bookMarked.map(bookMark=>(<div className='blog-title'><p>{bookMark.title}</p></div>))}
                
              
          </div>
            
        </div>
    );
};

export default BookMarked;