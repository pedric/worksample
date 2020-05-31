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
      activeItem: {},
      content: PageData,
      filters: Filters,
      modal: false
    }
    this.showPrevItems = this.showPrevItems.bind(this)
    this.showNextItems = this.showNextItems.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.filter = this.filter.bind(this)
  }

  filter(type){
  	console.log('filter this: ', type)
  }

  showPrevItems(items){
  	console.log('prev btn clicked', items)
  }

  showNextItems(items){
  	console.log('next btn clicked', items)
  }

  toggleModal(item, action){
		// console.log('action to toggle modalfunction: ', action)
		this.setState({ activeItem: item })
		this.toggleModalVisibility(action)
  }

  toggleModalVisibility(action){
  	console.log('toggleModalVisibility() triggered from toggleModal(), ACTION: ', action)
  	this.setState(prevState => {
  		return (
  			{ modal: action }
  		)
  	})
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
        	<Header data={this.state.content} filter={this.filter} />
        	<div className="box">
        		<Table key={'table_1'} invoices={this.state.invoices} activeInvoices={this.state.activeInvoices} showPrevItems={this.showPrevItems} showNextItems={this.showNextItems} toggleModal={this.toggleModal} filter={this.filter} />
        	</div>
        </div>
        <div style={modalStyles} className="modalWrapper">
        	<Modal item={this.state.activeItem} status={this.state.modal} />
        </div>
      </div>
    );
  }
}

export default HomePage;
