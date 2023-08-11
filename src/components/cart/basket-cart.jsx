import React from 'react';
import { useCoupon } from '../../context/CouponContext';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';

const BasketCart = () => {
  const { selectedOdds, getTotalOdds } = useCoupon();
  const [isExpanded, setIsExpanded] = React.useState(true); // Kuponun genişletilip genişletilmediğini kontrol etmek için

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white border rounded shadow-lg">
      <div className="flex justify-between items-center">
        <h4 className="font-bold mb-2">Kupon Detayı:</h4>
        {selectedOdds?.length > 0 && (
          <button onClick={toggleExpand} className="text-sm">
            {isExpanded ? <MinusIcon /> : <PlusIcon />}
          </button>
        )}
      </div>

      {isExpanded && (
        <ul>
          {selectedOdds.map((item, index) => (
            <li className="border-t p-2" key={index}>
              {item.match}: <strong>{item.oddsValue}</strong>
            </li>
          ))}
        </ul>
      )}

      {isExpanded && <hr className="my-2" />}
      <p className="font-bold">Toplam Oran: {getTotalOdds()}</p>
    </div>
  );
};

export default BasketCart;
