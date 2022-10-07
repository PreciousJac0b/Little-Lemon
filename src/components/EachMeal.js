import React from 'react';
import classes from './EachMeal.module.css';

const EachMeal = (props) => {
  return (
    <>
    {/* <div className={classes.top}></div> */}
    <div key={props.id} className={classes['each-meal']}>
        <div className={classes.left}>
            <h2>{props.title}</h2>
            <p className={classes.desc}>{props.description}</p>
            <p>{props.category}</p>
        </div>
        <div className={classes.right}>
            <p className={classes.price}>${props.price}</p>
            <p className={classes.size}>{props.size}</p>
            <button className={classes['cart-item-btn']} onClick={props.onClick}>add +</button>
        </div>
    </div>
    </>
  )
}

export default EachMeal