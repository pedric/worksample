import React from 'react';
import Title from 'components/Title';
import FilterButton from 'components/FilterButton';

function Header(props) {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <header style={styles}>
      <Title title={props.data.title} />
      <FilterButton />
    </header>
  );
}

export default Header;
