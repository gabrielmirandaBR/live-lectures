import React, { Component } from 'react';

class XMen extends Component {
  render() {
    const { XMenInfo: { name, alias, img } } = this.props;
    return (
      <section className = 'x-men-card'>
        <h3>
          { name }
        </h3>
        <p>
          { alias }
        </p>
        <img src = { img } alt = { alias } />
      </section>
    );
  }
}

export default XMen;