import React from "react";
import classes from "./Info.module.css";

// const reducerfunc = (state, action) => {
//   if (action.type === "track") {
//     return {...state, track: state.track + 100}
//   }
//   if (action.type === "color") {
//     return {...state, color: state.color + 200}
//   }
// }

const Info = () => {
  // const reducerState = {track: 100, color: 150};
  // const [state, dispatch] = useReducer(reducerfunc, reducerState);
  return (
    <>
      <section className={classes.info}>
        <article className={classes.mission}>
          <h2>About Us</h2>
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12–15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day. Little Lemon is owned by two Italian brothers, Mario and
            Adrian, who moved to the United States to pursue their shared dream
            of owning a restaurant. To craft the menu, Mario relies on family
            recipes and his experience as a chef in Italy. Adrian does all the
            marketing for the restaurant and led the effort to expand the menu
            beyond classic Italian to incorporate additional cuisines from the
            Mediterranean region.
          </p>
        </article>

        <article className={classes.about}>
          <h2>Our Mission</h2>
          <p>Endless pursuit of excellence in enterprises through strategic implementation of technology.</p>
          <p>
            Creating an unforgettable digital and in-person experience through ultra convenience, customer satisfaction, accessibility and transparency
            in the consumer market.
          </p>
          <p>
            Gather great minds to build a world class team of passionate result driven individuals to provite the utmost customer experience.
          </p>
        </article>
        <article className={classes['core-values']}>
          <h2>Core Values</h2>
          <h4>Sincerity.</h4>
          <p>Be passionate, produce result, take ownership</p>
          <h4>Satisfy and Enable.</h4>
          <p>We satisfy and enable our customers to win</p>
          <h4>Top-Notch.</h4>
          <p>We provide the best quality in the entire city.</p>
        </article>
        <article className={classes.commitment}>
          <h2>Our Commitment</h2>
          <ul>
            <li><p>We are the trusted partner to take a proactive approach towards your satisfaction</p></li>
            <li><p>We are the fellow small business that understands your day-to-day needs.</p></li>
            <li><p>We are the consumer system that is always there when you need us.</p></li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Info;
