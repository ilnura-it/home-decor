function Sale({ itemData, addToCart, handleShowMore }) {

  return (
    <div className="itemsDiv saleDiv">
      {itemData
        .filter((item) => {
          return item.searchItem === 'sale';
        })

        .map((item) => {
          const {
            id,
            name,
            oldPrice,
            newPrice,
            price,
            description,
            image,
            showMore,
          } = item;

          return (
            <div className="itemSection" key={id}>
              <h4>{name}</h4>
              <img src={image} alt="candle" />
              <h4 className="del">USD {oldPrice.toFixed(2)}</h4>
              <h4 className="newPrice">USD {newPrice.toFixed(2)}</h4>
              <h4>{price}</h4>
              <p className="description">
                {showMore ? description : description.substring(0, 50)}
                <button
                  className="moreBtn"
                  onClick={() => handleShowMore(item)}
                >
                  {showMore ? ' less' : ' more'}
                </button>
              </p>
              <button className="btn" onClick={() => addToCart(id)}>
                ADD
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Sale;
