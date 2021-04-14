import React, { Component } from 'react';

export default class GiftList extends Component {
  getGiftList() {
    return this.props.giftList.map((gift) => {
      return (
        <li key={gift.id}>
          <img src={gift.images.original.url} />
        </li>
      );
    });
  }
  render() {
    return <ul>{this.getGiftList()}</ul>;
  }
}
