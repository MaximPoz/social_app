import React from 'react';
import s from './Post.module.css';


const Post = (props) => { 
    return (
        <div>
            <div className={s.item}>
                <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg'></img>
                <span> Message: {props.message} </span>
            
               
            </div>
            <span>like: {props.like} </span>
        </div>
    )
}
export default Post;
