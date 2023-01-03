function Item({ itemData, addToCart, handleShowMore }) {
  return (
    <div className="itemsDiv">
      {itemData.map((item) => {
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
            <h4 className="del">
              {oldPrice > 0 && `USD  ${oldPrice.toFixed(2)}`}
            </h4>
            <h4 className="newPrice">
              {' '}
              {newPrice > 0 && `USD  ${newPrice.toFixed(2)}`}
            </h4>
            <h4>{price > 0 && `USD  ${price.toFixed(2)}`}</h4>
            <p className="description">
              {showMore ? description : description.substring(0, 50)}
              <button className="moreBtn" onClick={() => handleShowMore(item)}>
                {showMore ? ' less' : ' more'}
              </button>
            </p>
            <button className="btn" onClick={() => addToCart(id)}>
              ADD
            </button>
          </div>
        );
      })}
      {itemData.length === 0 && (
        <h2 className="searchNotFound">No items found</h2>
      )}
    </div>
  );
}

export default Item;
