import image from '../images/Group 19.png';

function Coupon() {
  return (
    <div>
      <div className="coupon-div">
        <img className="coupon-image" src={image} alt="coupon" />
        <h2 className="coupon-title">HAPPY HOLIDAY'S DAY</h2>
        <button className="coupon-btn">GET COUPON</button>
      </div>
    </div>
  );
}

export default Coupon;
