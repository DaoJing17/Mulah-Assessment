import React from 'react';
import Tables from './table';

const App: React.FC = () => {
  const table1Data = [
    { index: 'A1', value: 41 },
    { index: 'A2', value: 18 },
    { index: 'A3', value: 21 },
    { index: 'A4', value: 63 },
    { index: 'A5', value: 2 },
    { index: 'A6', value: 53 },
    { index: 'A7', value: 5 },
    { index: 'A8', value: 57 },
    { index: 'A9', value: 60 },
    { index: 'A10', value: 93 },
    { index: 'A11', value: 28 },
    { index: 'A12', value: 3 },
    { index: 'A13', value: 90 },
    { index: 'A14', value: 39 },
    { index: 'A15', value: 80 },
    { index: 'A16', value: 88 },
    { index: 'A17', value: 49 },
    { index: 'A18', value: 60 },
    { index: 'A19', value: 26 },
    { index: 'A20', value: 28 },
  ];

  const table1Lookup = Object.fromEntries(
    table1Data.map((row) => [row.index, row.value])
  );

  // Perform calculations for Table 2
  const table2Data = [
    { index: 'Alpha', value: table1Lookup['A5'] + table1Lookup['A20'] },
    { index: 'Beta', value: table1Lookup['A15'] / table1Lookup['A7'] },
    { index: 'Charlie', value: table1Lookup['A13'] * table1Lookup['A12'] },
  ];

  return (
    <div>
      <h1>Simple Assessment</h1>
      <Tables table1={table1Data} table2={table2Data} />
    </div>
  );
};

export default App;
