function Category({ chosenItemCategory, chosenPriceCategory }) {
  return (
    <div>
      <div>
        <select defaultValue="" onChange={(e) => chosenPriceCategory(e)}>
          <option value="" disabled>
            Price category
          </option>
          <option value="" type="checkbox">
            ALL
          </option>

          <option
            type="checkbox"
            value="above60"
            id="above60"
          >
            Above $60
          </option>

          <option
            type="checkbox"
            value="under50"
            id="under50"
          >
            Under $50
          </option>

          <option type="checkbox" value="50to60">
            $50 -$60
          </option>
        </select>
      </div>

      <button className="btnCateg" onClick={() => chosenItemCategory('vase')}>
        VASES
      </button>
      <button className="btnCateg" onClick={() => chosenItemCategory('candle')}>
        CANDLES
      </button>
      <button className="btnCateg" onClick={() => chosenItemCategory('pillow')}>
        PILLOWS
      </button>
      <button
        className="btnCateg"
        onClick={() => chosenItemCategory('botanic')}
      >
        BOTANICALS
      </button>
    </div>
  );
}

export default Category;
