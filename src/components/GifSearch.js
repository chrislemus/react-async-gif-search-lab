import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.searchRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.searchRef} />
        <input type="submit" />
      </form>
    );
  }
}
