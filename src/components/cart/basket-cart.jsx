import React from 'react';
import { useCoupon } from '../../context/CouponContext';

const BasketCart = () => {
  const { selectedOdds, getTotalOdds } = useCoupon();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white border rounded shadow-lg">
      <h4 className="font-bold mb-2">Kupon Detayı:</h4>
      <ul>
        {selectedOdds.map((item, index) => (
          <li key={index}>
            {item.match}: {item.oddsValue}
          </li>
        ))}
      </ul>
      <hr className="my-2" />
      <p>Toplam Oran: {getTotalOdds()}</p>
    </div>
  );
};

export default BasketCart;
