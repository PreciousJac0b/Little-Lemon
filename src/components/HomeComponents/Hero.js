import React from "react";
import classes from './Hero.module.css';
import chef3 from '../../assets/chef.jpg';
import chef2 from '../../assets/chef1.jpg';
import chef1 from '../../assets/chef3.jpg';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    {/* <div className={classes.help}>Help meeeeeeee</div> */}
      <section className={classes.top}>
        <article>
          <h2>30% off this weekend</h2>
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12–15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day.
          </p>
        </article>
      </section>
      <section className={classes.bottom}>
        <article>
          <h2>Our New Menu</h2>
          <img src={chef1} alt="A ribbon" />
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.
          </p>
          <p>Great Menu's to check</p>
          <div className={classes['btn-pack']}>
            <Link to="/products">
            <button className={classes['more-btn']}>more...</button>
            </Link>
          </div>
        </article>
        <article>
          <h2>Book a table</h2>
          <img src={chef2} alt="A chef" />
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.
          </p>
          <p>Why not book a table? </p>
          <div className={classes['btn-pack']}>
            <Link to="/contact">
            <button className={classes['more-btn']}>more...</button>
            </Link>
          </div>
        </article>
        <article>
          <h2>Opening Hours</h2>
          <img src={chef3} alt="A chef" />
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.
          </p>
          <p>Opening Hours 9:00am - 3:00pm</p>
          <div className={classes['btn-pack']}>
            <Link to="/info">
            <button className={classes['more-btn']}>more...</button>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};

export default Hero;
