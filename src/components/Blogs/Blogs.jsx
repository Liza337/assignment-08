import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Carts from '../Carts/Carts';
import BookMarked from '../BookMarked/BookMarked';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const [carts, setCarts]=useState([]);
    useEffect(()=>{

        fetch('data.json').then(res => res.json()).then(data =>setCarts(data))
    },[]);

    const [bookMarked, setBookMarked]=useState([]);

    const handleBookmark =(cart) =>{
        // console.log(cart);
        const exits=bookMarked.find( ct => ct.id===cart.id);
        if(exits){
            toast.info('You Have Already Bookmarked This Blog !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else
        {
            const newBookMarked =[...bookMarked,cart];
            setBookMarked(newBookMarked);
        }
        
        
            //  console.log('bookmarked is '+bookMarked.length);
            //  console.log('Newbookmarked is '+newBookMarked.length);
            //  if(newBookMarked.length>1){
            //    toast.info('You Have Already Bookmarked This Blog !', {
            //     position: toast.POSITION.TOP_CENTER
            // });
            //     // console.log('you have clicked');
            //  }

             
        
      }
      
    

      const [time, setTime]=useState([]);

    const handleReadTime =(getTime) =>{
        // console.log(cart);
        const newTime =[...time,getTime];
        setTime(newTime);
      }

    return (
        <div className='blogs-container'>
           
          <div className="cart-container">
            {
                carts.map(cart => <Carts
                    key={cart.id}
                    cart={cart}
                    handleBookmark={handleBookmark}
                    handleReadTime={handleReadTime}

                    ></Carts>)
            }
            <ToastContainer/>
            </div>
          <div className="bookmarked-container">
              <BookMarked 
              bookMarked={bookMarked}
              time={time}
             
              ></BookMarked>
          </div>

            
        </div>
    );
};

export default Blogs;