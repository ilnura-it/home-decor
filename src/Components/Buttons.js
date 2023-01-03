function Buttons({ itemData, sortHighToLow, sortLowToHigh }) {
  return (
    <div className="priceCategDiv">
      <button value="" onClick={() => sortLowToHigh(itemData)}>
        Price Low - High
      </button>
      <button value="" onClick={() => sortHighToLow(itemData)}>
        Price High - Low
      </button>
    </div>
  );
}

export default Buttons;
