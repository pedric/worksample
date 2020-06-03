import React from 'react'
import Cross from 'images/cross.svg'

class Modal extends React.Component {
	constructor(props){
		super()
		this.state= {
			item: false,
			status: 'not-active',
			loaded: '',
			toggleModal: props.toggleModal
		}
	}

	componentWillReceiveProps({item, status}){
		this.setState(prevState => {
  		return (
  			{ 
  				item: item,
  				status: status ? 'active' : 'not-active'
  			}
  		)
  	})
	}

	render(){

  	const contentWrapperStyles = { padding: '24px' }

		if(this.state.item){
			return(
			<div className={'modal '+this.state.status}>
				<div className={'modal__wrapper'}>
					<div className={'modal__imageWrapper'}>
						<img src={this.state.item.image.url} alt={this.state.item.image.alt} />
					</div>
					<div style={contentWrapperStyles}>
						<h3>{this.state.item.name}</h3>
						<table>
							<tbody>
							<tr>
								<td>
									<div className={'modal__label'}>type</div>
									<div className={'modal__value'}>{this.state.item.type}</div>
								</td>
								<td>
									<div className={'modal__label'}>account name</div>
									<div className={'modal__value'}>{this.state.item.name}</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className={'modal__label'}>status</div>
									<div className={'modal__value'}>{this.state.item.status ? 'active' : 'deactivated'}</div>
								</td>
								<td>
									<div className={'modal__label'}>currency</div>
									<div className={'modal__value'}>{this.state.item.currency}</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className={'modal__label'}>balance</div>
									<div className={'modal__value'}>{this.state.item.balance}</div>
								</td>
								<td>
									<div className={'modal__label'}>notes</div>
									<div className={'modal__value'}>{this.state.item.notes}</div>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className={'modal__closeButtonWrapper'}>
					<button className={'modal__closeButton'} onClick={() => this.state.toggleModal(false, false)}><img src={Cross} alt='#' /></button>
				</div>
			</div>
		)
		} else {
			return('')
		}
	}
}

export default Modal