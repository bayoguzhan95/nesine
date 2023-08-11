import { Headers } from '../../enums';

const TableItemHeaders = ({ firstItem = '' }) => (
  <tr className='text-xs md:text-sm'>
    <td className="border">{firstItem}</td>
    {Headers.map((title, index) => (
      <td key={index} className={`border text-center font-bold  ${title?.isHiddenMobile ? 'hidden md:table-cell' : ''}`}>
        {title?.title}
      </td>
    ))}
  </tr>
);

export default TableItemHeaders;
