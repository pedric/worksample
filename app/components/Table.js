import React from 'react';
import TableRow from 'components/TableRow';
import Arrow from 'images/arrow.svg'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	invoices: props.invoices,
    	activeInvoices: props.activeInvoices,
    	showPrevItems: props.showPrevItems,
    	showNextItems: props.showNextItems,
    	toggleModal: props.toggleModal
    }
  }

  render() {

    const tableStyles = { width: '100%', margin: '0 auto', textAlign: 'left' }
    const flexBoxStyles = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 50px' }
    const prevBtnStyles = { position: 'relative', margin: '0 5px 0 20px', padding: '4px', border: 'none', outline: 'none', background: 'none', height: '21px', width: '20px' }
    const nextBtnStyles = { position: 'relative', margin: '0 0 0 5px', padding: '4px', border: 'none', outline: 'none', background: 'none', height: '21px', width: '20px', transform: 'scaleX(-1)' }
    const arrowStyles = { maxHeight: '13px', maxWidth: '13px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }

    const tableRows = this.state.activeInvoices.map(item => (
      <TableRow key={item.id} item={item} toggleModal={this.state.toggleModal} />
    ))

    return (
      <div className='table'>
      	<div style={flexBoxStyles}>
        	<h3 className='table__title'>Invoices</h3>
        	<div>
        		<p className={'ib'}>{`Visar ${this.state.activeInvoices[0].id} - ${this.state.activeInvoices[this.state.activeInvoices.length-1].id} av ${this.state.invoices.length}`}</p>
        		<button className={'ib'} style={prevBtnStyles} onClick={() => this.state.showPrevItems(this.state.activeInvoices)}><img style={arrowStyles} src={Arrow} alt='#' /></button>
        		<button className={'ib'} style={nextBtnStyles} onClick={() => this.state.showNextItems(this.state.activeInvoices)}><img style={arrowStyles} src={Arrow} alt='#' /></button>
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
