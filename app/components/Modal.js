import React from 'react'

class Modal extends React.Component {
	constructor(props){
		console.log('sent to modal: ',props)
		super()
		this.state= {
			item: false,
			status: 'not-active'
		}
	}

	componentWillReceiveProps({item}){
		console.log('componentWillReceiveProps(): ', this.state.item.image)
		// toggle visibility
		this.setState(prevState => {
  		return (
  			{ 
  				item: item,
  				status: item.status ? 'active' : 'not-active'
  			}
  		)
  	})
	}

	render(){

		if(this.state.item){
			return(
			<div className={'modal '+this.state.status}>
				<div className={'modal__wrapper'}>
					<div className={'modal__imageWrapper'}>
						<img src={this.state.item.image.url} alt={this.state.item.image.alt} />
					</div>
					<table>
						<tbody>
						<tr>
							<td>test</td>
							<td>tets</td>
						</tr>
						<tr>
							<td>test</td>
							<td>tets</td>
						</tr>
						<tr>
							<td>test</td>
							<td>tets</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div className={'modal__closeButtonWrapper'}>
					<button className={'modal__closeButton'}>Knapp</button>
				</div>
			</div>
		)
		} else {
			return(<h1>inget att returnersa</h1>)
		}
		
	}
}

export default Modal