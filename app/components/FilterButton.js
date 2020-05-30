import React from 'react';

class FilterButton extends React.Component {
  constructor() {
    super();
    this.state = {};
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
      <button style={buttonStyles}>
        <span style={dotStyles} />
        <span style={dotStyles} />
        <span style={dotStyles} />
      </button>
    );
  }
}

export default FilterButton;
