import React from 'react';

function TableRow(props) {
	const styles = {
		height: '44px'
	}

  let status = props.item.status ? 'active' : 'deactivated'

  return (
    <tr className='table__row table__row--body' style={styles} onClick={() => props.toggleModal(props.item, true)}>
      <td>{props.item.type}</td>
      <td>{props.item.name}</td>
      <td>{status}</td>
      <td>{props.item.currency}</td>
      <td>{props.item.balance}</td>
    </tr>
  );
}

export default TableRow;