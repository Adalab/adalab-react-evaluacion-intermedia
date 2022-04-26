import '../styles/App.scss';
import friendsInfo from '../data/friends_info.json';
import { useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState(friendsInfo);
  const [newQuote, setnewQuote] = useState({
    quote: '',
    character: '',
  });
  const [quoteSearch, setQuoteSearch] = useState('');
  const [characterSearch, setCharacterSearch] = useState('');

  const handleAddBtn = (ev) => {
    ev.preventDefault();
    setQuotes([...quotes, newQuote]);
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

  const handleQuoteSearch = (ev) => {
    setQuoteSearch(ev.target.value);
    console.log(quoteSearch);
  };

  const handleCharacterSearch = (ev) => {
    setCharacterSearch(ev.currentTarget.value);
  };

  const htmlQuotes = quotes
    .filter((quote) => quote.quote.toLowerCase().includes(quoteSearch))
    .filter((quote) => quote.character.toLowerCase().includes(characterSearch))
    .map((quote, i) => {
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
        <label htmlFor='quoteSearch'>Filtrar por frase</label>
        <input
          onChange={handleQuoteSearch}
          type='text'
          name='quoteSearch'
          id='quoteSearch'
          value={quoteSearch}
          placeholder='¡Ay caramba!'
        />

        <label htmlFor=''>Filtrar por personaje</label>
        <select name='select' onChange={handleCharacterSearch}>
          <option value='todos' defaultValue>
            Todos
          </option>
          <option value='ross'>Ross</option>
          <option value='monica'>Monica</option>
          <option value='joey'>Joey</option>
          <option value='phoebe'>Phoebe</option>
          <option value='chandler'>Chandler</option>
          <option value='rachel'>Rachel</option>
        </select>
      </div>

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
