import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

let cards = [
  {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
  {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
  {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
  {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
  {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
  {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
  {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
  {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
  {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
  {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
  {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
  {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
  {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
  {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
  {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
  {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: shuffle(cards),
      noClick: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }
  handleNewGame() {
    let cards = this.state.cards.map(card => ({
      ...card,
      cardState: CardState.HIDING
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }
  handleClick(id) {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(card => {
        if (idsToChange.includes(card.id)) {
          return {
            ...card,
            cardState: newCardState
          }
        }
        return card;
      });
    }
    const foundCard = this.state.cards.find(card => card.id === id);
    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return ;
    }
    let noClick = false;

    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

    const showingCards = cards.filter(card => card.cardState === CardState.SHOWING);

    const ids = showingCards.map(card => card.id);

    if (showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } else if (showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      noClick = true;

      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          //after 1.3 seconds sets the state to HIDING
          this.setState({cards: hidingCards, noClick: false});
        }, 1300);
      });
      return ;
    }
    this.setState({cards, noClick});
  }

  render() {
    const cards = this.state.cards.map((card) => (
      <Card 
        key={card.id} 
        showing={card.cardState !== CardState.HIDING} 
        backgroundColor={card.backgroundColor}
        onClick={() => this.handleClick(card.id)} 
      />
    ));
    return (
      <div className="App">
        <Navbar onClickNewGame={this.handleNewGame} />
        {cards}
      </div>
    );
  }
}

export default App;
