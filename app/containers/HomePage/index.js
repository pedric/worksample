/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Invoices from 'data/Invoices';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(Invoices);

    return <div>hej från template</div>;
  }
}

export default HomePage;
