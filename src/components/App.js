// import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getQuotes from '../services/fetch';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setnewQuote] = useState({
    quote: '',
    character: '',
  });
  const [quoteSearch, setQuoteSearch] = useState('');
  const [characterSearch, setCharacterSearch] = useState('all');

  const [warning, setWarning] = useState('')

  const handleAddBtn = (ev) => {
    ev.preventDefault();

    if (newQuote.quote === '' || newQuote.character === '') {
      return setWarning('¡Oye, rellena los campos!')
     } else {

    setQuotes([...quotes, newQuote]);
    // vaciar inputs
    setnewQuote({
      quote: '',
      character: '',
    });

    setWarning('')

     }
 

  };

  useEffect(() => {
    if (quotes.length === 0) {
      getQuotes().then((datafromAPI) => {
        setQuotes(datafromAPI);
      });
    }
  }, []);

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
    .filter((quote) => {
      if (characterSearch === 'all') {
        return true;
      } else if (characterSearch === quote.character) {
        return true;
      } else {
        return false;
      }
    })

    .filter((quote) =>
      quote.quote.toLowerCase().includes(quoteSearch.toLowerCase())
    )
    // .filter((quote) => quote.character.toLowerCase().includes(characterSearch))
    .map((quote, i) => {
      return (
        <li className='page__list' key={i}>
          <strong> {quote.quote} </strong> - <em> {quote.character} </em>
        </li>
      );
    });


  return (
    <div className='App page'>
      <header>
        <h1 className='page__title'>Frases de Friends</h1>
      </header>
      <form className='page__form' action=''>
        <div className='page__add'>
          <h2>Añadir una nueva frase</h2>
          <label htmlFor='quote'>Frase</label>
          <input
            onChange={handlenewQuote}
            type='text'
            name='quote'
            id='quote'
            value={newQuote.quote}
          />

          <label htmlFor='character'>Personajes</label>
          <input
            onChange={handlenewQuote}
            type='text'
            name='character'
            id='character'
            value={newQuote.character}
          />
          <p>{warning}</p>
          <button onClick={handleAddBtn}>Añadir</button>
        </div>
        <div className='page__filter'>
          <h2>Filtrar</h2>

          <label htmlFor='quoteSearch'>Filtrar por frase</label>
          <input
            onChange={handleQuoteSearch}
            type='text'
            name='quoteSearch'
            id='quoteSearch'
            value={quoteSearch}
            placeholder='¡Ay caramba!'
          />

          <label htmlFor='select'>Filtrar por personaje</label>
          <select
            value={characterSearch}
            id='name'
            name='select'
            onChange={handleCharacterSearch}
          >
            <option value='all'>Todos</option>
            <option value='Ross'>Ross</option>
            <option value='Monica'>Monica</option>
            <option value='Joey'>Joey</option>
            <option value='Phoebe'>Phoebe</option>
            <option value='Chandler'>Chandler</option>
            <option value='Rachel'>Rachel</option>
          </select>
        </div>
      </form>

      <div className='page__ul'>
        <ul>{htmlQuotes}</ul>
      </div>
    </div>
  );
}

export default App;
