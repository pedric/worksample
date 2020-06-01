import React from 'react';

class FilterBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
    	status: 'not-active',
    	filterFunction: props.filterFunction,
    	toggleFunction: props.toggleFilterBox
    };
  }

  componentWillReceiveProps({status}) {
  	this.setState(prevState => {
  		return (
  			{ status: status ? 'active' : 'not-active' }
  		)
  	})
	}

  render() {

    return (
      <div className={'filterbox '+ this.state.status}>
        <h2>FILTERBOX KOMPONENT</h2>
        <p onClick={() => this.state.filterFunction('filtertyp')}>Click me to filter</p>
        <p onClick={() => this.state.toggleFunction()}>Click me to close</p>
      </div>
    );
  }
}

export default FilterBox;
