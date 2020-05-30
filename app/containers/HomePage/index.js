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
import FilterBox from 'components/FilterBox';
import Table from 'components/Table';
import BackgroundImage from 'images/background_1.png';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      invoices: Invoices,
      content: PageData,
      filters: Filters,
    };
  }

  render() {
    const flexBoxStyles = {
      display: 'flex',
      flexWrap: 'wrap',
    };

    const modalStyles = {
      background: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div style={flexBoxStyles}>
        <div className="listWrapper">
          <Header data={this.state.content} />
          <FilterBox />
          <Table invoices={this.state.invoices} />
        </div>
        <div style={modalStyles} className="modalWrapper" />
      </div>
    );
  }
}

export default HomePage;
