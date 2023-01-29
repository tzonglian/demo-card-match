import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [flipCount, setFlipCount] = useState(0);
  // const [prevCard, setPrevCard] = useState("");

  // interface Card: {
  //   flipState: Boolean;
  //   matched: Boolean;
  //   label: String;
  //   position: Number //key
  //   prevCardLabel
  // }

  // If firstCard
  //  if match: firstCard and secondCard match to true, matchedForWin += 1
  //  if not match: wait for one more mouseClick, firstCard and secondCard to unflipped, wipe firstCard/prevCard
  // useRef:
  // alert when winState = matchedForWin == TOTAL_CARDS / 2

  const TOTAL_CARDS = 16;
  const cardDeck = [
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "H",
    "H",
  ];

  // function setup(TOTAL_CARDS) {

  // }

  // Basic Functionality to still implement
  // randomize cards on setup
  // when click on match, stay open, prevent from unflipping a matched card
  // when click on unmatched, close both

  // Extra functionality
  // 1) Input number of cards, restricted to even numbers
  // 2) Reset button to flip all cards over and reshuffle
  // 3) Set grid closest to a square

  function Card(props) {
    const [flipState, setFlipState] = useState(false);
    //const [matched, setMatched] = useState(false);
    const handleClick = (e) => {
      setFlipState(true);
      // props.setFlipCount(flipcount+1);
      console.log(props.flipCount, flipState);

      // if (!matched) {
      //   if (flips % 2 === 0) {
      //     if (prevCard.lttr === props.lttr) {
      //       setMatched(true);
      //       setFlipState(true);
      //     } else {
      //       setFlipState(false);
      //       // setFlipState(!prevCard.flipState)
      //     }
      //   }
    };

    return (
      <div onClick={handleClick} className="card">
        {flipState ? props.lttr : "?"}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          {cardDeck.map((card, i) => {
            return <Card key={i} lttr={card} flipCount={flipCount} />;
          })}
        </div>
        <h4>Number of flips: {flipCount}</h4>
      </header>
    </div>
  );
}

export default App;
