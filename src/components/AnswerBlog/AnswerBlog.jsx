import React from 'react';
import'./AnswerBlog.css';

const AnswerBlog = () => {
    return (
        <footer className='answer-blog'>
            <div className="question">
               <h5>Props vs state</h5>
               <p>Props are used to pass data from one component to another and it is immutable while state contains data of the component and can be changed that means it is mutable</p>
            </div>
            <div className="question">
               <h5>How does useState work?</h5>
               <p>useState returns an array with two parameters.The first is initial variable and the second is a function that set the value of initial variable </p>
            </div>
            <div className="question">
               <h5>Purpose of useEffect other than fetching data</h5>
               <p>The useEffect is useful to  perform side effects in the component rather than fetching data.It can update the state of a component based on props.</p>
            </div>
            <div className="question">
               <h5>How Does React work?</h5>
               <p>React works based on component.The elements are broken down into smaller reusable components and then compose together to create complex user interfaces.</p>
            </div>

        </footer>
    );
};

export default AnswerBlog;