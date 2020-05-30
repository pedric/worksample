import React from 'react';
import TableRow from 'components/TableRow';

class Table extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
    	invoices: props.invoices,
    	activeInvoices: props.invoices.slice(0, 20)
    };
  }

  render() {
    
    const tableStyles = {
      width: '100%',
      margin: '0 auto',
      textAlign: 'left'
    }

    const flexBoxStyles = {
    	display: 'flex',
    	justifyContent: 'space-between',
    	alignItems: 'center',
    	padding: '16px 50px'
    }

    const tableRows = this.state.activeInvoices.map(item => (
      <TableRow items={item} />
    ))

    return (
      <div className='table'>
      	<div style={flexBoxStyles}>
        	<h3 className='table__title'>Invoices</h3>
        	<div>
        		<p>{`Visar ${this.state.activeInvoices[0].id} - ${this.state.activeInvoices[this.state.activeInvoices.length-1].id} av ${this.state.invoices.length}`}</p>
        	</div>
        </div>
        <table style={tableStyles}>
          <thead>
            <tr className='table__row'>
              <th><span>Type</span></th>
              <th><span>Account name</span></th>
              <th><span>Status</span></th>
              <th><span>Currency</span></th>
              <th><span>Balance</span></th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table
