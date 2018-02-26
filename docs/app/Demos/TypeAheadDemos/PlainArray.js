import React, { Component } from 'react';
import { TypeAhead } from 'src';
import { frameworks } from '../constants';

export default class PlainArrayDemo extends Component {
  state = {
    selectedFramework: 'React',
  };

  handleChange = ({ option }) => {
    this.setState({ selectedFramework: option });
  };

  render() {
    return (
      <div>
        <div className="demo">
          <h3>Plain Array</h3>
          <TypeAhead
            options={frameworks}
            selected={this.state.selectedFramework}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
