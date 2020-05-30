import React from 'react';
  
function TableRow(props) {
	const styles = {
		height: '44px'
	}

  let status = props.items.status ? 'active' : 'deactivated'
  
  return (
    <tr className='table__row' style={styles}>
      <td>{props.items.type}</td>
      <td>{props.items.name}</td>
      <td>{status}</td>
      <td>{props.items.currency}</td>
      <td>{props.items.balance}</td>
    </tr>
  );
}

export default TableRow;