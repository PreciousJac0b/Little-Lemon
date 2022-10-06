import React from 'react';
import classes from './EachMeal.module.css';

const EachMeal = () => {
  return (
    <>
    <div className={classes.top}></div>
    <div className={classes['each-meal']}>
        <div>
            <h2>Rice Dream Original Non-Dairy Beverage Organic</h2>
            <p>Rice Dream Organic Original Enriched Rice Drink.</p>
            <p>Bakery</p>
        </div>
        <div>
            <p>$5.77</p>
            <p>Size</p>
            <button>add +</button>
        </div>
    </div>
    </>
  )
}

export default EachMeal