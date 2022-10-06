import React from "react";
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const clicked = () => {
        const navbarUl = document.querySelector("#navbar");
        const navbarUlValue = navbarUl.getAttribute("data-visible");
        if (navbarUlValue === "true") {
          navbarUl.setAttribute("data-visible", false);
          document
            .querySelector("#hamburger")
            .setAttribute("background-set", false);
          document.querySelector("#backdrop").style.display = "none";
        } else {
          navbarUl.setAttribute("data-visible", true);
          document.querySelector("#hamburger").setAttribute("background-set", true);
          document.querySelector("#backdrop").style.display = "block";
        }
      };
  return (
    <>
      <section className={classes.header}>
        <header>
          <h2>Little Lemon</h2>
        </header>
        <div id="backdrop" onClick={clicked} className={classes.backdropped}></div>
          <button
            onClick={clicked}
            id="hamburger"
            background-set="false"
            className={classes.hamburger}
          >
            <span className={classes["sr-only"]}>Menu</span>
          </button>
        <nav>
          <ul data-visible="false"
            id="navbar"
            className={classes["navbar-ul"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <button className={classes['cart-btn']}>
                Cart
                <span>3</span></button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
