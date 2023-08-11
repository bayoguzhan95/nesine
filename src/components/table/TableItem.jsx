import React from 'react';
import { useCoupon } from '../../context/CouponContext';
import TableItemHeaders from './TableItemHeader';
import { TdItem } from './TdItem';

export const TableItem = ({ data }) => {
  const { addToCoupon, selectedOdds } = useCoupon();

  const isSelected = React.useCallback(
    (matchCode, oddsValue) => !!selectedOdds.find((item) => item.code === matchCode && item.oddsValue === oddsValue),
    [selectedOdds]
  );

  const handleAddToCoupon = React.useCallback(
    (matchData, value) => {
      addToCoupon(matchData, value);
    },
    [addToCoupon]
  );

  const clickHandler = {
    isSelected,
    handleClick: handleAddToCoupon,
  };

  return (
    <React.Fragment>
      <TableItemHeaders firstItem={`${data.D}, ${data.DAY}, ${data.LN}`} />

      <tr className="text-sm">
        <td className={`border min-w-[120px]  w-1/5 p-2  `}>
          <strong>{data.C}</strong> {`, ${data.T}, ${data.N}`}
        </td>
        <TdItem data={data} isCustomCell={true}>
          Yorumlar
        </TdItem>
        <TdItem data={data} isCustomCell={true}>
          {data.OCG['1'].MBS}
        </TdItem>
        <TdItem data={data} code={data.C} ocgKey="1" ocKey="0" clickHandler={clickHandler} />
        <TdItem data={data} code={data.C} ocgKey="1" ocKey="1" clickHandler={clickHandler} />
        <TdItem data={data} isCustomCell={true}></TdItem>
        <TdItem data={data} code={data.C} ocgKey="5" ocKey="25" clickHandler={clickHandler} />
        <TdItem data={data} code={data.C} ocgKey="5" ocKey="26" clickHandler={clickHandler} />
        <TdItem data={data} isCustomCell={true}></TdItem>
        <TdItem data={data} isCustomCell={true}></TdItem>
        <TdItem data={data} isCustomCell={true}></TdItem>
        <TdItem data={data} isCustomCell={true}></TdItem>
        <TdItem data={data} isCustomCell={true}></TdItem>
        <TdItem data={data} code={data.C} ocgKey="2" ocKey="3" clickHandler={clickHandler} />
        <TdItem data={data} code={data.C} ocgKey="2" ocKey="4" clickHandler={clickHandler} />
        <TdItem data={data} code={data.C} ocgKey="2" ocKey="5" clickHandler={clickHandler} />
        <TdItem data={data} isCustomCell={true}></TdItem>
        <TdItem data={data} isCustomCell={true}></TdItem>
        <TdItem data={data} isCustomCell={true}>
          3
        </TdItem>
      </tr>
    </React.Fragment>
  );
};
