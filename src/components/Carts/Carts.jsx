import React from 'react';
import './Carts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Carts = (props) => {
     console.log(props);
    const {name,title,author_img,cover_img,publish_date
,read_time}=props.cart;

  const handleBookmark= props.handleBookmark;
  const handleReadTime=props.handleReadTime;

  
    return (
        <div className='cart'>
            <img className="cover-img" src={cover_img} alt="" />
            <div className="class-flex">
                <div className='author-info'>
                   <img className="author-img" src={author_img} alt="" />
                    <div className="author-name">
                      <p id='name'>{name}</p>
                      <p>{publish_date} (4 days ago)</p>
                    </div>
                </div>
                <p>{read_time} min read <FontAwesomeIcon icon={faBookmark} onClick={() =>handleBookmark(props.cart)} /></p>
                  
                
             </div>
            <div className="title">
               <h3>{title}</h3>
               <p>#beginners  #programming</p>
                  <a onClick={() =>handleReadTime(read_time)}>Mark as read</a>
            </div>
        </div>
    );
};

export default Carts;