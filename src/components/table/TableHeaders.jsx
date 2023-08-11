import { Headers } from '../../enums';

const TableHeaders = ({ dataLength }) => (
  <thead>
    <tr>
      <th className="border p-3 bg-zinc-200">{`Count ${dataLength}`}</th>
      {Headers.map((title, index) => (
        <th key={index} className="border p-3 bg-zinc-200">
          {title}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeaders;
