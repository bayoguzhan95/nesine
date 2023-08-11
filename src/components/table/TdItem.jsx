import React from 'react';

export const TdItem = ({ data, code, ocgKey, ocKey, clickHandler }) => {
  const value = data?.OCG[ocgKey]?.OC[ocKey]?.O;
  const className = React.useMemo(() => {
    const isSelected = clickHandler && clickHandler.isSelected(code, value);
    return `border cursor-pointer hover:bg-gray-200 transition ease-linear duration-150 ${isSelected ? 'bg-yellow-300' : ''}`;
  }, [clickHandler, code, value]);

  return (
    <td className={className} onClick={() => clickHandler && clickHandler.handleClick(data, value)}>
      {value}
    </td>
  );
};
