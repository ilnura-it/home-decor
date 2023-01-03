import './App.css';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import React, { useState } from 'react';
import { data } from './data/data';

function App() {
  const [itemData, setItemData] = useState(data);
  const [itemsDataFilter] = useState(data);
  const [showMore, setShowMore] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [cartActive, setCartActive] = useState(false);
  const excludeColumns = ['id'];

  const showCart = () => {
    setCartActive(!cartActive);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setItemData(data);
    } else {
      const filteredData = data.filter((item) => {
        return Object.keys(item).some((key) => {
          return excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setItemData(filteredData);
    }
  };

  const handleShowMore = (item) => {
    item.showMore = !item.showMore;
    setShowMore(!showMore);
  };

  const addToCart = (id) => {
    if (!cart.find((element) => element.id === id)) {
      let userCart = [...cart];

      data.forEach((item) => {
        if (item.id === id) {
          const itemToBuy = { ...item };
          userCart.push(itemToBuy);
        }
      });

      setCart(userCart);
      setCartActive(true);
    }
  };

  const deleteItem = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const chosenPriceCategory = (e) => {
    const newItemsList = [...itemsDataFilter];
    const newItems = newItemsList.filter((element) =>
      element.searchTerm.includes(e.target.value)
    );
    setItemData(newItems);
  };

  const chosenItemCategory = (searchItem) => {
    const newItemsList = [...itemsDataFilter];
    const newItems = newItemsList.filter(
      (element) => element.searchItem === searchItem
    );
    setItemData(newItems);
  };

  const sortLowToHigh = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].price > arr[j + 1].price) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    let temp = [...arr];
    setItemData(temp);
  };

  const sortHighToLow = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].price < arr[j + 1].price) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    let temp = [...arr];
    setItemData(temp);
  };

  return (
    <div className="App">
      <Navigation
        itemData={itemData}
        setItemData={setItemData}
        addToCart={addToCart}
        deleteItem={deleteItem}
        chosenPriceCategory={chosenPriceCategory}
        chosenItemCategory={chosenItemCategory}
        handleShowMore={handleShowMore}
        searchText={searchText}
        handleSearch={handleSearch}
        sortHighToLow={sortHighToLow}
        sortLowToHigh={sortLowToHigh}
        cart={cart}
        setCart={setCart}
        cartActive={cartActive}
        setCartActive={setCartActive}
        showCart={showCart}
      />

      <Footer />
    </div>
  );
}

export default App;
