import { Headers } from '../../enums';

const TableHeaders = ({ dataLength }) => (
  <thead>
    <tr>
      <th className="border">{`Count ${dataLength}`}</th>
      {Headers.map((title, index) => (
        <th key={index} className="border">
          {title}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeaders;
