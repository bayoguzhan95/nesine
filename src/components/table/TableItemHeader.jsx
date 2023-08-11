import { Headers } from '../../enums';

const TableItemHeaders = ({ firstItem = '' }) => (
  <tr>
    <td className="border text-sm  ">{firstItem}</td>
    {Headers.map((title, index) => (
      <td key={index} className="border text-sm text-center font-bold ">
        {title}
      </td>
    ))}
  </tr>
);

export default TableItemHeaders;
