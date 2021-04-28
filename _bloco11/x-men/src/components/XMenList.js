import React, { Component } from 'react';
import XMen from './XMen';

class XMenList extends Component {
  render() {
    const { XMenList } = this.props;
    return (
      <section className = 'x-men-list'>
        {XMenList.map((xmen) => (
          <XMen key = { xmen.id } XMenInfo = { xmen } />))}
      </section>
    );
  }
}

export default XMenList;