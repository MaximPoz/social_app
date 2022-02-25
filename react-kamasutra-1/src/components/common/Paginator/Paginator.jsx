import React from 'react';
import styles from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.allPages}>
    {pages.map(p => {
        return <span className={currentPage === p && styles.selectPage} //если текущая страница ровна "p" (странице) тогда применить к ней стиль selectPage
            onClick={(e) => { onPageChanged(p) }}>  {p}</span> //при нажатии на кнопку установи текущую страницу
    })}
</div>
}

export default Paginator; 