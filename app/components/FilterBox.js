import React from 'react';

class FilterBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
    	status: 'not-active',
    	filterFunction: props.filter
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
  	// const styles = {
  	// 	display: 'none',
  	// 	position: 'absolute',
   //  	background: 'lightgray',
   //  	padding: '10px',
   //  	width: '500px',
	  //   right: '0',
	  //   bottom: '0',
	  //   transform: 'translateY(100%)',

	  //   &.active { display: 'block' }
  	// }

    return (
      <div className={'filterbox '+ this.state.status}>
        <h2>FILTERBOX KOMPONENT</h2>
        <p onClick={() => this.state.filterFunction('status')}>Click me</p>
      </div>
    );
  }
}

export default FilterBox;
