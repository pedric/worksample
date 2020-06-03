import React from 'react';

class FilterBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
    	status: 'not-active',
    	filterFunction: props.filterFunction,
    	toggleFunction: props.toggleFilterBox
    }
  }

  componentWillReceiveProps({status}) {
  	this.setState(prevState => {
  		return (
  			{ status: status ? 'active' : 'not-active' }
  		)
  	})
	}

  render() {

  	const titleStyles = {
  		display: 'inline-block',
  		margin: '0px 8px 0 0',
  		color: '#0276ff'
  	}

  	const labelStyles = {
  		color: '#0276ff',
  		fontSize: '14px',
    	margin: '0 0 0 2px'
  	}

    return (
      <div className={'filterbox '+ this.state.status}>
      	<div className={'filterbox__flexWrapper'}>
	        <h3 style={titleStyles}>Filter:</h3>
					<div><input onChange={() => this.state.filterFunction('active',event.target.checked)} type='checkbox' id='active' name='active' value='active' /><label style={labelStyles} for='active'>active</label></div>
					<div><input onChange={() => this.state.filterFunction('deactivated',event.target.checked)} type='checkbox' id='deactivated' name='deactivated' value='deactivated' /><label style={labelStyles} for='deactivated'>deactivated</label></div>
					<div><input onChange={() => this.state.filterFunction('checking',event.target.checked)} type='checkbox' id='checking' name='checking' value='checking' /><label style={labelStyles} for='checking'>checking</label></div>
					<div><input onChange={() => this.state.filterFunction('savings',event.target.checked)} type='checkbox' id='savings' name='savings' value='savings' /><label style={labelStyles} for='savings'>savings</label></div>
				</div>
      </div>
    );
  }
}

export default FilterBox;
