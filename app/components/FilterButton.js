import React from 'react';
import FilterBox from 'components/FilterBox';

class FilterButton extends React.Component {
  constructor(props) {
    super();
    this.state = {
    	filterBox: false,
    	filterFunction: props.filter
    };
    this.toggleFilterBox = this.toggleFilterBox.bind(this)
  }

  toggleFilterBox(){
  	this.setState(prevState => {
  		return (
  			{ filterBox: !prevState.filterBox }
  		)
  	})
  }

  render() {
    const buttonStyles = {
      position: 'relative',
      border: 'none',
      outline: 'none',
      background: 'none',
      // height: '20px',
      padding: '7px',
    };

    const dotStyles = {
      display: 'inline-block',
      width: '7px',
      height: '7px',
      background: '#0277FF',
      borderRadius: '50%',
      padding: '2px',
      margin: '0 2px',
    };

    return (
    	<div style={{position:'relative'}}>
	      <button style={buttonStyles} onClick={this.toggleFilterBox}>
	        <span style={dotStyles} />
	        <span style={dotStyles} />
	        <span style={dotStyles} />
	      </button>
	      <FilterBox status={this.state.filterBox} filterFunction={this.state.filterFunction} toggleFilterBox={this.toggleFilterBox} />
	     </div>
    );
  }
}

export default FilterButton;
