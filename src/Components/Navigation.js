import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Advice from './Advice';
import ContactUs from './ContactUs';
import Sale from './Sale';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { BiMenuAltLeft } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import React, { useState } from 'react';
import Cart from './Cart';

function Navigation(props) {
  const [responsive, setResponsive] = useState(false);
 
  const toggleMenu = () => {
    setResponsive(!responsive);
  };

  return (
    <Router>
      <div className="heading">
        <h1>HOME DECOR</h1>
        <h3>
          Our store offers unique and eye-catching contemporary home accessories
          that you need for your home
        </h3>
      </div>

      <nav>
        <div className="hamburgerDiv" onClick={toggleMenu}>
          {responsive ? (
            <IoIosClose className="hamburger" />
          ) : (
            <BiMenuAltLeft className="hamburger" />
          )}
        </div>
        <div
          className={responsive ? 'navigationMenu expanded' : 'navigationMenu'}
          onClick={toggleMenu}
        >
          <ul>
            <Link to="/" className="link">
              Shop
            </Link>
            <Link to="/aboutUs" className="link">
              About
            </Link>
            <Link to="/advice" className="link">
              Advice
            </Link>
            <Link to="/sale" className="link red">
              Sale
            </Link>
            <Link to="/contactUs" className="link">
              Contact Us
            </Link>
          </ul>
        </div>
        <div className=" symbol">
          <BsPerson className="symbol-link " />
          <HiOutlineShoppingBag className="symbol-link" onClick={props.showCart}/>
          <div
             className={props.cartActive ? "cartDiv open" : "cartDiv close"}    
          ><Cart cart = {props.cart} setCart = {props.setCart} deleteItem={props.deleteItem} showCart = {props.showCart}/></div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              itemData={props.itemData}
              setItemData={props.setItemData}
              showCart={props.showCart}
              addToCart={props.addToCart}
              deleteItem={props.deleteItem}
              chosenPriceCategory={props.chosenPriceCategory}
              chosenItemCategory={props.chosenItemCategory}
              handleToggle={props.handleToggle}
              handleShowMore={props.handleShowMore}
              searchText={props.searchText}
              handleSearch={props.handleSearch}
              sortHighToLow={props.sortHighToLow}
              sortLowToHigh={props.sortLowToHigh}
            />
          }
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/advice" element={<Advice />} />
        <Route
          path="/sale"
          element={
            <Sale
              itemData={props.itemData}
              addToCart={props.addToCart}
              handleShowMore={props.handleShowMore}
            />
          }
        />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
