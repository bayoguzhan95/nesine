import React from 'react';
import { useCoupon } from '../../context/CouponContext';
import TableItemHeaders from './TableItemHeader';

export const TableItem = ({ data }) => {
  const { addToCoupon, selectedOdds } = useCoupon();

  const isSelected = (matchCode, oddsValue) => {
    const found = selectedOdds.find((item) => item.code === matchCode && item.oddsValue === oddsValue);
    return found ? 'bg-yellow-500' : '';
  };

  const handleAddToCoupon = React.useCallback(
    (matchData, value) => {
      addToCoupon(matchData, value);
    },
    [addToCoupon]
  );

  const TdItem = ({ data, code, ocgKey, ocKey, clickHandler }) => {
    const value = data?.OCG[ocgKey]?.OC[ocKey]?.O;
    const className = `border ${clickHandler && isSelected(code, value)}`;

    return (
      <td className={className} onClick={() => clickHandler && clickHandler(data, value)}>
        {value}
      </td>
    );
  };

  return (
    <React.Fragment>
      <TableItemHeaders firstItem={`${data.D}, ${data.DAY}, ${data.LN}`} />
      <tr>
        <td className={`border`}>
          <strong>${data.C}</strong> {`, ${data.T}, ${data.N}`}
        </td>
        <td className={`border`}>Yorumlar</td>
        <td className={`border`}>{data.OCG['1'].MBS}</td>
        <TdItem data={data} code={data.C} ocgKey="1" ocKey="0" clickHandler={handleAddToCoupon} />
        <TdItem data={data} code={data.C} ocgKey="1" ocKey="1" clickHandler={handleAddToCoupon} />
        <td className={`border`}></td>
        <TdItem data={data} code={data.C} ocgKey="5" ocKey="25" clickHandler={handleAddToCoupon} />
        <TdItem data={data} code={data.C} ocgKey="5" ocKey="26" clickHandler={handleAddToCoupon} />
        <td className={`border`}></td>
        <td className={`border`}></td>
        <td className={`border`}></td>
        <td className={`border`}></td>
        <td className={`border`}></td>
        <TdItem data={data} code={data.C} ocgKey="2" ocKey="3" clickHandler={handleAddToCoupon} />
        <TdItem data={data} code={data.C} ocgKey="2" ocKey="4" clickHandler={handleAddToCoupon} />
        <TdItem data={data} code={data.C} ocgKey="2" ocKey="5" clickHandler={handleAddToCoupon} />
        <td className={`border`}></td>
        <td className={`border`}></td>
        <td className={`border`}>3</td>
      </tr>
    </React.Fragment>
  );
};
