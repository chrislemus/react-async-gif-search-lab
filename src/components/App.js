import React, { Component } from 'react';
import GiftContainer from '../containers/GifListContainer';
import SearchForm from '../components/GifSearch';

import NavBar from './NavBar';

// the App component should render out the GifListContainer component

export default class App extends Component {
  state = {
    query: 'cats',
  };

  onSearch = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <NavBar color="black" title="Giphy Search" />
        <SearchForm onSearch={this.onSearch} />
        <GiftContainer query={this.state.query} />
      </div>
    );
  }
}
