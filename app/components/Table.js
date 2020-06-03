import React from 'react';
import TableRow from 'components/TableRow';
import Arrow from 'images/arrow.svg'

class Table extends React.Component {
  constructor(props) {
    super();
    this.state = {
    	invoices: props.invoices,
    	activeInvoices: props.activeInvoices,
    	showPrevItems: props.showPrevItems,
    	showNextItems: props.showNextItems,
    	toggleModal: props.toggleModal,
    	sortActiveArray: props.sortActiveArray
    }
  }

  componentWillReceiveProps(props){
  	this.setState({activeInvoices: props.activeInvoices})
  	this.setState({invoices: props.invoices})
  }

  numberOfFirstItem(){
  	let low_number = ''
  	if(this.state.invoices.indexOf(this.state.activeInvoices[0])){
  		low_number = this.state.invoices.indexOf(this.state.activeInvoices[0])
  	}
  	return low_number+1;
  }

  numberOfLastItem(){
  	let high_number = ''
		if(this.state.invoices.indexOf(this.state.activeInvoices[this.state.activeInvoices.length-1])){
  		high_number = this.state.invoices.indexOf(this.state.activeInvoices[this.state.activeInvoices.length-1])
  	}
  	return parseInt(high_number+1);
  }

  render() {

    const tableStyles = { width: '100%', margin: '0 auto', textAlign: 'left' }
    // const flexBoxStyles = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 50px' }
    const prevBtnStyles = { position: 'relative', margin: '0 5px 0 20px', padding: '4px', border: 'none', outline: 'none', background: 'none', height: '21px', width: '20px' }
    const nextBtnStyles = { position: 'relative', margin: '0 0 0 5px', padding: '4px', border: 'none', outline: 'none', background: 'none', height: '21px', width: '20px', transform: 'scaleX(-1)' }
    const arrowStyles = { maxHeight: '13px', maxWidth: '13px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }

    const tableRows = this.state.activeInvoices.map(item => (
      <TableRow key={item.id} item={item} toggleModal={this.state.toggleModal} />
    ))

    return (
      <div className='table'>
      	<div className='table__flexWrap'>
        	<h3 className='table__title'>Invoices</h3>
        	<div>
        		<p className={'ib'}>{`Visar ${this.numberOfFirstItem()} - ${this.numberOfLastItem()} av ${this.state.invoices.length}`}</p>
        		<button className={'ib'} style={prevBtnStyles} onClick={() => this.state.showPrevItems()}><img style={arrowStyles} src={Arrow} alt='#' /></button>
        		<button className={'ib'} style={nextBtnStyles} onClick={() => this.state.showNextItems()}><img style={arrowStyles} src={Arrow} alt='#' /></button>
        	</div>
        </div>
        <table style={tableStyles}>
          <thead>
            <tr className='table__row'>
              <th onClick={() => this.state.sortActiveArray('type')}><span>Type</span></th>
              <th onClick={() => this.state.sortActiveArray('name')}><span>Account name</span></th>
              <th onClick={() => this.state.sortActiveArray('status')}><span>Status</span></th>
              <th onClick={() => this.state.sortActiveArray('currency')}><span>Currency</span></th>
              <th onClick={() => this.state.sortActiveArray('balance')}><span>Balance</span></th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table
