import React from 'react'
import TableRow from 'components/TableRow'

class Table extends React.Component{

	constructor(){
		super()
		this.state = {
			invoices: {} 
		}
	}

	render(){
// console.log(this.props.invoices)
		const tableStyles = {
			textAlign: 'left',
	    width: '100%',
	    margin: '0 auto',
	    background: 'lightgray'
		}

		const tableRows = this.props.invoices.map(item =>
			<TableRow items={item} />	
		)

		return(
				<div>
					<h3>Invoices</h3>
					<table style={tableStyles}>
					    <thead>
					        <tr>
					            <th>Type</th>
					            <th>Account name</th>
					            <th>Status</th>
					            <th>Currency</th>
					            <th>Balance</th>
					        </tr>
					    </thead>
					    <tbody>
					        {tableRows}
					    </tbody>
					</table>
				</div>
			)
	}
}
export default Table