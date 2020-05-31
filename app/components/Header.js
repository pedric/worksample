import React from 'react';
import Title from 'components/Title';
import FilterButton from 'components/FilterButton';

function Header(props) {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 0 20px 0'
  };

  return (
    <header style={styles}>
      <Title title={props.data.title} />
      <FilterButton filter={props.filter} />
    </header>
  );
}

export default Header;
