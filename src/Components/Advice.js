import { useState } from 'react';
import { dataTwo } from '../data/data';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

function Advice() {
  const [advice, setAdvice] = useState(0);

  const previousItem = () => {
    setAdvice((advice) => {
      advice--;
      if (advice < 0) {
        return dataTwo.length - 1;
      }
      return advice;
    });
  };

  const nextItem = () => {
    setAdvice((advice) => {
      advice++;
      if (advice > dataTwo.length - 1) {
        advice = 0;
      }
      return advice;
    });
  };

  const { id, name, description, image } = dataTwo[advice];

  return (
    <div className="advice">
      <h2>Design Advice from our top designer </h2>
      <div key={id} className="divSale ">
        <h4>
          {id}. {name}
        </h4>
        <p className="description-advice">{description} </p>
        <div className="buttons">
          <button className="btn next" onClick={previousItem}>
            <BiChevronLeft />
          </button>
          <img className="advice-image" src={image} alt="sale" />
          <button className="btn prev" onClick={nextItem}>
            <BiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Advice;
