import { useState, useEffect } from 'react';
import { RiDeleteBin7Line, RiAddFill } from 'react-icons/ri';
import { HiOutlineMinus } from 'react-icons/hi';
import { AiOutlineCloseSquare } from 'react-icons/ai';

function Cart({ cart, setCart, deleteItem, showCart }) {
  const [totalCount, setTotalCount] = useState();
  const [totalSum, setTotalSum] = useState();

  useEffect(() => {
    const getTotalCount = () => {
      let countTotal = cart.reduce((total, cart) => {
        return total + cart.count;
      }, 0);

      let sumTotal = cart.reduce((total, cart) => {
        return total + cart.priceCart;
      }, 0);
      setTotalCount(countTotal);
      setTotalSum(sumTotal.toFixed(2));
    };
    getTotalCount();
  }, [cart]);

  const addCount = (id) => {
    const newCart = [];
    cart.forEach((item) => {
      if (item.id === id) {
        if (item.price === undefined) item.price = item.newPrice;
        let countNew = item.count + 1;
        let totalPrice = (item.count + 1) * item.price.toFixed(2);
        const changeCart = { ...item, count: countNew, priceCart: totalPrice };
        newCart.push(changeCart);
      } else {
        newCart.push(item);
      }
    });
    setCart(newCart);
  };

  const removeCount = (id) => {
    const newCart = [];
    cart.forEach((item) => {
      if (item.id === id) {
        if (item.count === 1) return;
        if (item.price === undefined) item.price = item.newPrice;
        let countNew = item.count - 1;
        let totalPrice = (item.count - 1) * item.price.toFixed(2);
        const changeCart = { ...item, count: countNew, priceCart: totalPrice };
        newCart.push(changeCart);
      } else {
        newCart.push(item);
      }
    });
    setCart(newCart);
  };

  return (
    <div className="cart">
      <h2 style={{ textAlign: 'center', marginTop: '10px' }}>
        Added to your cart
      </h2>
      <span className="closeCart" onClick={showCart}>
        <AiOutlineCloseSquare />
      </span>

      {cart.map((item) => {
        const { id, name, count, priceCart } = item;
        return (
          <ul key={id} className="item-to-buy">
            <li className="item-name">
              <p>{name}</p>
              <p>
                <span>
                  <HiOutlineMinus
                    className="item-btn"
                    onClick={() => removeCount(id)}
                  />
                </span>
                <span style={{ fontSize: '20px' }}>{count}</span>

                <span>
                  <RiAddFill
                    className="item-btn"
                    onClick={() => addCount(id)}
                  />
                </span>
              </p>
              <p>USD {priceCart.toFixed(2)} </p>
              <RiDeleteBin7Line
                className="item-btn"
                onClick={() => deleteItem(id)}
              />
            </li>
          </ul>
        );
      })}

      <div className="cartTotal">
        <button className="addBtn" onClick={() => setCart([])}>
          DELETE ALL
        </button>
        <p>
          SUBTOTAL: (<span>{totalCount} items)</span> USD {totalSum}
        </p>
        <button className="btn">PAY</button>
      </div>
    </div>
  );
}

export default Cart;
