import React from 'react';
import { useCoupon } from '../../context/CouponContext';

const BasketCart = () => {
  const { selectedOdds, getTotalOdds } = useCoupon();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white border rounded shadow-lg">
      <h4 className="font-bold mb-2">Kupon Detayı:</h4>
      <ul>
        {selectedOdds.map((item, index) => (
          <li className="border-b p-2" key={index}>
            {item.match}: <strong>{item.oddsValue}</strong>
          </li>
        ))}
      </ul>
      <hr className="my-2" />
      <p className="font-bold">Toplam Oran: {getTotalOdds()}</p>
    </div>
  );
};

export default BasketCart;
