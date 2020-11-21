import React, { Component } from 'react';
import axios from 'axios';

import AddDocumentForm from './addDocumentForm';
import BinCardView from './binCardView';
import { apiBaseUrl } from '../../../constants';

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bins: [],
      cardList: []
    }
    this.updateCards = this.updateCards.bind(this);
  }

  updateCards() {
    const token = localStorage.getItem("token");
    axios.get(apiBaseUrl + '/document/bins', {
      headers: {
        'Authorization': token
      }
    }).then(response => {
      this.setState({bins: response.data});
    });
    axios.get(apiBaseUrl + '/document', {
      headers: {
        'Authorization': token
      }
    }).then(response => {
      this.setState({
        cardList: response.data
      })
    })
  }

  componentDidMount() {
    this.updateCards();
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.state.cardList) != JSON.stringify(prevState.cardList))
      this.updateCards();
  }

  render() {
    return (
      <div>
        <span style={{
          display: 'block',
          width: '100vw',
          height: '80px'
        }}></span>
        <AddDocumentForm user={this.props.user} bins={this.state.bins} updateCards={() => this.updateCards()} />
        <span style={{
          display: 'block',
          width: '100vw',
          height: '3px',
          boxShadow: '0px 5px 5px #ccc',
        }}></span>
        {this.state.bins.map(bin => <BinCardView binName={bin} cardList={this.state.cardList.filter(card => card.binName === bin)} updateCards={() => this.updateCards()} />)}
      </div>
    )
  }
}

export default Document;