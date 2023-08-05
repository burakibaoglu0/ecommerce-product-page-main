import { useState } from 'react';

import './quantityBox.scss';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

const QuantityBox = () => {
  const [quantity, setQuantity] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    const actionType = (e.currentTarget as HTMLElement).dataset.actionType;

    actionType === 'increase' ? setQuantity(quantity + 1) : quantity !== 0 ? setQuantity(quantity - 1) : setQuantity(0);
  }

  return (
    <div className="add-to-cart-quantity-box">
            <button onClick={handleClick} className="qty-decrease-button qty-button" data-action-type="decrease">
              <img src={iconMinus} />
            </button>
            <input type="text" value={quantity} readOnly />
            <button onClick={handleClick} className="qty-increase-button qty-button" data-action-type="increase">
              <img src={iconPlus} />
            </button>
          </div>
  )
}

export default QuantityBox;