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

  	// <button onClick={() => this.state.toggleFunction()}>Close</button>

  	const wrapperStyles = {
  		display: 'flex',
  		justifyContent: 'center',
  		alignItems: 'center'
  	}

  	const titleStyles = {
  		display: 'inline-block',
  		margin: '0px 8px 0 0',
  		color: '#0276ff'
  	}

  	const inputStyles = {
  		margin: '0px 0 0 10px'	
  	}

  	const labelStyles = {
  		color: '#0276ff',
  		fontSize: '14px',
    	margin: '0 0 0 2px'
  	}

    return (
      <div className={'filterbox '+ this.state.status}>
      <div style={wrapperStyles}>
	        <h3 style={titleStyles}>Filter:</h3>
					<input style={inputStyles} onChange={() => this.state.filterFunction('active',event.target.checked)} type='checkbox' id='active' name='active' value='active' /><label style={labelStyles} for='active'>active</label>
					<input style={inputStyles} onChange={() => this.state.filterFunction('deactivated',event.target.checked)} type='checkbox' id='deactivated' name='deactivated' value='deactivated' /><label style={labelStyles} for='deactivated'>deactivated</label>
					<input style={inputStyles} onChange={() => this.state.filterFunction('checking',event.target.checked)} type='checkbox' id='checking' name='checking' value='checking' /><label style={labelStyles} for='checking'>checking</label>
					<input style={inputStyles} onChange={() => this.state.filterFunction('savings',event.target.checked)} type='checkbox' id='savings' name='savings' value='savings' /><label style={labelStyles} for='savings'>savings</label>
				</div>
      </div>
    );
  }
}

export default FilterBox;
