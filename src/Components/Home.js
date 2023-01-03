import Items from './Items';
import Buttons from './Buttons';
import Category from './Category';
import Coupon from './Coupon';
import ScrollButton from './ScrollButton';

function Home(props) {

  return (
    <div className="homePage">

      <div className="searchDiv">
        <input
          type="text"
          placeholder="Search..."
          value={props.searchText}
          onChange={(e) => props.handleSearch(e.target.value)}
        />
      </div>

      <div>
        <Buttons
          sortHighToLow = {props.sortHighToLow}
          sortLowToHigh = {props.sortLowToHigh}
          itemData = {props.itemData}
        />
      </div>

      <div className="categorySection">
        <div className="chooseCategoryDiv">
          <Category chosenItemCategory={props.chosenItemCategory} chosenPriceCategory={props.chosenPriceCategory}/>
        </div>

        <Items
          itemData={props.itemData}
          addToCart={props.addToCart}
          handleShowMore={props.handleShowMore}
        />
      </div>

      <Coupon />
      <ScrollButton />
    </div>
  );
}

export default Home;
