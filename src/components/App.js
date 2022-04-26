import '../styles/App.scss';
import friendsInfo from '../data/friends_info.json';
import { useState } from 'react';

function App() {
  console.log(friendsInfo);
  const [quotes, setQuotes] = useState(friendsInfo);
  const [newQuote, setnewQuote] = useState({
    quote: '',
    character: '',
  });

  const handleAddBtn = (ev) => {
    ev.preventDefault();
    setQuotes([...quotes, newQuote])
    // vaciar inputs
    setnewQuote({
      quote: '',
      character: '',
    });
  };

  const handlenewQuote = (ev) => {
    setnewQuote({
      ...newQuote,
      [ev.target.id]: ev.target.value,
    });
  };


  const htmlQuotes = quotes.map((quote, i) => {
    return (
      <li key={i}>
        <strong> {quote.quote} </strong> - <em> {quote.character} </em>
      </li>
    );
  });

  return (
    <div className='App'>
      <h1>Frases de Friends</h1>
      <div>
        <ol>{htmlQuotes}</ol>
      </div>

      <div>
        <h2>Añadir una nueva frase</h2>
      </div>

      <form action=''>
        <label htmlFor=''>Frase</label>
        <input
          onChange={handlenewQuote}
          type='text'
          name='quote'
          id='quote'
          value={newQuote.quote}
        />

        <label htmlFor=''>Personajes</label>
        <input
          onChange={handlenewQuote}
          type='text'
          name='character'
          id='character'
          value={newQuote.character}
        />
        <button onClick={handleAddBtn}>Añadir</button>
      </form>
    </div>
  );
}

export default App;
