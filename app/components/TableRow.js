import React from 'react';

function TableRow(props) {
  console.log(props);
  return (
    <tr>
      <th>Type</th>
      <th>Account name</th>
      <th>Status</th>
      <th>Currency</th>
      <th>Balance</th>
    </tr>
  );
}

export default TableRow;
