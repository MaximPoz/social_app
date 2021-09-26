import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
<div>
        <div className={s.item}>
            <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg'></img>
            Post 1
        </div>
        <span>like</span>
</div>
    )
}
export default Post;