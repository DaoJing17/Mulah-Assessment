import React from 'react';

interface TableData {
  index?: string;
  value?: number | string;
}

interface TableProps {
  table1: TableData[];
  table2: TableData[];
}

const table: React.FC<TableProps> = ({ table1, table2 }) => {
  return (
    <div>
      {/* Table 1 */}
      <h2>Table 1</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {table1.map((row, idx) => (
            <tr key={idx}>
              <td>{row.index}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table 2 */}
      <h2>Table 2</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {table2.map((row, idx) => (
            <tr key={idx}>
              <td>{row.index}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default table;
