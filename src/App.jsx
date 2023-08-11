import React from 'react';
import useFetchData from './hooks/useFetchData';
import Loading from './components/common/Loading';
import TableHeaders from './components/table/TableHeaders';
import { TableItem } from './components/table/TableItem';
import BasketCart from './components/cart/basket-cart';

const URL = 'https://nesine-case-study.onrender.com/bets';

function App() {
  const { isLoading, isError, data } = useFetchData(URL);

  const [displayedData, setDisplayedData] = React.useState([]);
  const [dataEnd, setDataEnd] = React.useState(false);

  const loadMoreData = React.useCallback(() => {
    if (!data || data.length === 0) return;

    const nextData = data.slice(displayedData.length, displayedData.length + 50);

    if (nextData.length === 0) {
      setDataEnd(true);
    } else {
      setDisplayedData((prevData) => [...prevData, ...nextData]);
    }
  }, [displayedData, data]);

  const handleScroll = React.useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !dataEnd) {
      loadMoreData();
    }
  }, [dataEnd, loadMoreData]);

  React.useEffect(() => {
    if (data?.length > 0 && displayedData.length === 0) {
      setDisplayedData(data.slice(0, 50));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data, handleScroll]);

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
          {displayedData?.map((match, index) => (
            <TableItem key={index} data={match} />
          ))}
        </tbody>
      </table>
      <BasketCart />
    </div>
  );
}

export default App;
