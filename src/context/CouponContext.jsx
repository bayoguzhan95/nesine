// CouponContext.js
import React, { createContext, useContext, useState } from 'react';

const CouponContext = createContext();

export const useCoupon = () => {
  return useContext(CouponContext);
};

export const CouponProvider = ({ children }) => {
  const [selectedOdds, setSelectedOdds] = useState([]);
  console.log(selectedOdds)

  const addToCoupon = (matchInfo, odds) => {
    const newItem = {
        code: matchInfo.C,
        match: `${matchInfo.D} - ${matchInfo.N}`,
        oddsValue: odds
    };
    setSelectedOdds(prev => {
        // Önceki seçimi kaldırma
        const filteredOdds = prev.filter(item => item.code !== matchInfo.C);
        return [...filteredOdds, newItem];
    });
}


const getTotalOdds = () => {
  return selectedOdds.reduce((acc, item) => acc * parseFloat(item.oddsValue), 1).toFixed(2);
}

  return <CouponContext.Provider value={{ selectedOdds, addToCoupon, getTotalOdds }}>{children}</CouponContext.Provider>;
};
