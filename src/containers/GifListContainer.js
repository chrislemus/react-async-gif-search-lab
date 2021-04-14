import React, { Component } from 'react';
import GiftList from '../components/GifList';

export default class GiftContainer extends Component {
  state = {
    giftList: [],
  };

  componentDidMount() {
    this.fetchQuery();
  }

  componentDidUpdate() {
    this.fetchQuery();
  }

  fetchQuery = () => {
    const { query } = this.props;
    if (query.length > 0) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
      )
        .then((res) => res.json())
        .then(({ data }) => {
          this.setState({ giftList: data });
          console.log(data);
        });
    }
  };
  render() {
    return (
      <div>
        <GiftList giftList={this.state.giftList} />
      </div>
    );
  }
}
