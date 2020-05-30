import React from 'react';

function Title(props) {
  const styles = {
    color: '#0277FF',
    fontWeight: '400',
    fontSize: '28px',
    margin: '0',
  };
  return <h1 style={styles}>{props.title}</h1>;
}

export default Title;
