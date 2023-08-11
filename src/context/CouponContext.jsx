import React, { createContext, useContext, useState, useEffect } from 'react';

const CouponContext = createContext();

export const useCoupon = () => {
  return useContext(CouponContext);
};

export const CouponProvider = ({ children }) => {
  const [selectedOdds, setSelectedOdds] = useState([]);

  useEffect(() => {
    // localStorage'dan veriyi çekip state'e ata
    const storedOdds = localStorage.getItem('selectedOdds');
    if (storedOdds) {
      setSelectedOdds(JSON.parse(storedOdds));
    }
  }, []);

  useEffect(() => {
    // Her seferinde state değiştiğinde veriyi localStorage'a kaydet
    localStorage.setItem('selectedOdds', JSON.stringify(selectedOdds));
  }, [selectedOdds]);

  const addToCoupon = (matchInfo, odds) => {
    const newItem = {
      code: matchInfo.C,
      match: `${matchInfo.D} - ${matchInfo.N}`,
      oddsValue: odds,
    };

    setSelectedOdds((prev) => {
      const isSameOptionSelected = prev.some((item) => item.code === matchInfo.C && item.oddsValue === odds);
      if (isSameOptionSelected) {
        return prev.filter((item) => !(item.code === matchInfo.C && item.oddsValue === odds));
      }
      const filteredOdds = prev.filter((item) => item.code !== matchInfo.C);
      return [...filteredOdds, newItem];
    });
  };

  const clearCoupon = () => {
    setSelectedOdds([]);
    localStorage.removeItem('selectedOdds'); // Sepeti temizlerken localStorage'dan da sil
  };

  const getTotalOdds = () => {
    return selectedOdds.reduce((acc, item) => acc * parseFloat(item.oddsValue), 1).toFixed(2);
  };

  return (
    <CouponContext.Provider value={{ selectedOdds, addToCoupon, getTotalOdds, clearCoupon }}>{children}</CouponContext.Provider>
  );
};
