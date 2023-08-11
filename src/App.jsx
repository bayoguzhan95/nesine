import React from 'react';
import useFetchData from './hooks/useFetchData';
import Loading from './components/common/Loading';
import TableHeaders from './components/table/TableHeaders';
import { TableItem } from './components/table/TableItem';
import BasketCart from './components/cart/basket-cart';

const URL = 'https://nesine-case-study.onrender.com/bets';

function App() {
  const { isLoading, isError, data } = useFetchData(URL);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <table className="min-w-full bg-white">
        <TableHeaders dataLength={data?.length} />
        <tbody>
          {data?.map((match) => (
            <TableItem key={match?.NID} data={match} />
          ))}
        </tbody>
      </table>
      <BasketCart />
    </div>
  );
}

export default App;
