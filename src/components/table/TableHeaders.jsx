import { Headers } from '../../enums';

const TableHeaders = ({ dataLength }) => (
  <thead>
    <tr className='text-xs md:text-sm' >
      <th className="border p-3 bg-zinc-200">{`Event Count ${dataLength}`}</th>
      {Headers.map((title, index) => (
        <th key={index} className={`border p-3 bg-zinc-200 ${title?.isHiddenMobile ? 'hidden md:table-cell' : ''}`}>
          {title?.title}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeaders;
