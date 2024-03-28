import React from 'react';

const DynamicTable = ({ columns, rows }) => {
  return (
    <table className="table-auto w-full rounded-xl">
      <thead className='bg-gray-800 rounded-xl' >
        <tr className=" text-white uppercase ">
          {columns.map((column) => (
            <th key={column} className="px-6 py-3 text-left">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className={` ${index % 2 === 0 ? 'bg-black text-white' : ' text-white'}`}>
            {row.map((cell, cellIndex) => (
              <td key={`${columns[cellIndex]}-${index}`} className="px-6 py-4 ">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
