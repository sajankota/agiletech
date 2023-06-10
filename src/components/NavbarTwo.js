import React, { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarTwo = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    // eslint-disable-next-line no-console
    console.log('hell');
  };

  // Control sidebar navigation
  const items = document.querySelectorAll('.menu-item-has-children > a');
  for (const i in items) {
    if (Object.prototype.hasOwnProperty.call(i)) {
      items[i].onclick = function () {
        this.parentElement.querySelector('.sub-menu').classList.toggle('active');
        this.classList.toggle('open');
      };
    }
  }
  return (
    <>
      {/*  search popup start  */}
      <div
        className={searchShow ? 'td-search-popup active' : 'td-search-popup '}
        id="td-search-popup"
      >
        <form action="/" className="search-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search....." />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </div>
      {/*  search popup end  */}
      <div
        onClick={searchActive}
        className={searchShow ? 'body-overlay active' : 'body-overlay'}
        id="body-overlay"
      />
      {/*  ==================== Navbar Two Start ====================  */}
      <nav className="navbar navbar-area navbar-area-2 navbar-expand-lg">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? 'menu toggle-btn d-block d-lg-none open'
                  : 'menu toggle-btn d-block d-lg-none'
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link to="/">
              <img src="assets/img/logo.png" alt="img" />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div>
          <div
            className={active ? 'collapse navbar-collapse sopen' : 'collapse navbar-collapse'}
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-end">
              <li className="menu-item-has-children">
                <a href="/#">Home</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">Home 01</Link>
                  </li>
                  <li>
                    <Link to="/index-2">Home 02</Link>
                  </li>
                  <li>
                    <Link to="/index-3">Home 03</Link>
                  </li>
                  <li>
                    <Link to="/index-4">Home 04</Link>
                  </li>
                  <li>
                    <Link to="/index-5">Home 05</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/#">Service</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Service Single</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/team-details">Team Details</Link>
                  </li>
                  <li>
                    <Link to="/case-study-details">Case Study Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop align-self-center">
            <Link className="btn btn-border-base" to="/about">
              Discover More
              <FaPlus />
            </Link>
          </div>
        </div>
      </nav>
      {/*  ==================== Navbar Two end ====================  */}
    </>
  );
};

export default NavbarTwo;
