/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Invoices from 'data/Invoices';
import PageData from 'data/PageData';
import Filters from 'data/Filters';
import Header from 'components/Header';
import Table from 'components/Table';
import Modal from 'components/Modal';
import BackgroundImage from 'images/background_1.png';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      invoices: Invoices,
      activeInvoices: Invoices.slice(0, 20),
      activeItem: false,
      content: PageData,
      filters: Filters,
      modal: false,
      previouslySortedBy: false
    }
    this.showPrevItems = this.showPrevItems.bind(this)
    this.showNextItems = this.showNextItems.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.sortActiveArray = this.sortActiveArray.bind(this)
    this.filterInvoices = this.filterInvoices.bind(this)
  }

  filterInvoices(filterType){
  	console.log(filterType)
  }

  sortActiveArray(type){

  	let reverse = this.state.previouslySortedBy === type ? true : false
  	
  	if(!this.state.previouslySortedBy){
  		this.setState({previouslySortedBy: type})
  	} else {
  		this.setState({previouslySortedBy: false})
  	}

  	if(type === 'type'){
  		let sortedArray = this.state.activeInvoices
  		sortedArray.sort(function(a,b){
  			let type_a = a.type.toLowerCase()
  			let type_b = b.type.toLowerCase()
  			if(reverse){
  				if(type_a > type_b){ return -1 }
					if(type_a < type_b){ return 1 }	
  			} else{
  				if(type_a < type_b){ return -1 }
					if(type_a > type_b){ return 1 }
  			}
				return 0
  		})
  		this.setState({activeInvoices: sortedArray})
  	}

  	if(type === 'name'){
  		let sortedArray = this.state.activeInvoices
  		sortedArray.sort(function(a,b){
  			let name_a = a.name.slice(14,a.length).toLowerCase()
  			let name_b = b.name.slice(14,b.length).toLowerCase()
  			if(reverse){
  				if(name_a > name_b){ return -1 }
					if(name_a < name_b){ return 1 }
  			} else {
  				if(name_a < name_b){ return -1 }
				if(name_a > name_b){ return 1 }
  			}
				return 0
  		})
  		this.setState({activeInvoices: sortedArray})
  	}

  	if(type === 'status'){
  		let sortedArray = this.state.activeInvoices
  		sortedArray.sort(function(a,b){
  			if(reverse){
  				return Number(a.status) - Number(b.status)
  			} else {
  				return Number(b.status) - Number(a.status)
  			}
  		})
  		this.setState({activeInvoices: sortedArray})
  	}

  	if(type === 'currency'){
  		let sortedArray = this.state.activeInvoices
  		sortedArray.sort(function(a,b){
  			let currency_a = a.currency.toLowerCase()
  			let currency_b = b.currency.toLowerCase()
  			if(reverse){
  				if(currency_a < currency_b){ return -1 }
					if(currency_a > currency_b){ return 1 }	
  			} else {
  				if(currency_a < currency_b){ return -1 }
					if(currency_a > currency_b){ return 1 }
  			}
				return 0
  		})
  		this.setState({activeInvoices: sortedArray})
  	}

  	if(type === 'balance'){
  		let sortedArray = this.state.activeInvoices
  		sortedArray.sort(function(a,b){
  			let balance_a = a.balance.replace('$','')
  			balance_a.toString()
  			balance_a.replace(',','')
  			let balance_b = b.balance.replace('$','')
  			balance_b.toString()
  			balance_b.replace(',','')
  			if(reverse){
  				return parseFloat( balance_b ) - parseFloat( balance_a )	
  			} else{
  				return parseFloat( balance_a ) - parseFloat( balance_b )
  			} 
  		})
  		this.setState({activeInvoices: sortedArray})
  	}  	
  }

  showPrevItems(){

  	let lowestId = ''
  	let highestId = ''
  	let sortedPreviousArray = this.state.activeInvoices.sort(function(a,b){
			let id_a = a.id
			let id_b = b.id
				return parseFloat( id_a ) - parseFloat( id_b )
		})
		highestId = parseInt(sortedPreviousArray[0].id-1)
		lowestId = parseInt(highestId-20)

		if(lowestId <= 0) {
			lowestId = 0
		}

		if(!highestId <= 0){
			this.setState({activeInvoices: this.state.invoices.slice(lowestId,highestId)})
		}
  }

  showNextItems(){

  	let lowestId = ''
  	let highestId = ''
  	let sortedPreviousArray = this.state.activeInvoices.sort(function(a,b){
			let id_a = a.id
			let id_b = b.id
				return parseFloat( id_a ) - parseFloat( id_b )
		})
		lowestId = parseInt(sortedPreviousArray[sortedPreviousArray.length-1].id)
		highestId = parseInt(lowestId+20)
		
		if(highestId > Invoices.length) {
			highestId = Invoices.length
		}

		if(lowestId < Invoices.length){
			this.setState({activeInvoices: this.state.invoices.slice(lowestId,highestId)})
		}
  }

  toggleModal(item, action){
		this.setState({ activeItem: item, modal: action })
  }

  render() {
    const flexBoxStyles = {
      display: 'flex',
      flexWrap: 'wrap',
    };

    const modalStyles = {
    	position: 'relative',
      background: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    return (
      <div style={flexBoxStyles}>
        <div className="listWrapper">
        	<Header data={this.state.content} filterFunction={this.filterInvoices} />
        	<div className="box">
        		<Table key={'table_1'} invoices={this.state.invoices} activeInvoices={this.state.activeInvoices} showPrevItems={this.showPrevItems} showNextItems={this.showNextItems} toggleModal={this.toggleModal} sortActiveArray={this.sortActiveArray} />
        	</div>
        </div>
        <div style={modalStyles} className="modalWrapper">
        	<Modal item={this.state.activeItem} status={this.state.modal} toggleModal={this.toggleModal} />
        </div>
      </div>
    );
  }
}

export default HomePage;
