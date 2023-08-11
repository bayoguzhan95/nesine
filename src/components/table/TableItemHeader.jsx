import { Headers } from '../../enums';

const TableItemHeaders = ({ firstItem = '' }) => (
  <tr>
    <td className="border">{firstItem}</td>
    {Headers.map((title, index) => (
      <td key={index} className="border">
        {title}
      </td>
    ))}
  </tr>
);

export default TableItemHeaders;
