import React, { Component } from 'react';
import css from './Container.module.css';

export default class Container extends Component {
  render() {
    return <div className={css.container}>{this.props.children}</div>;
  }
}
