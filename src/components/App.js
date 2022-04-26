import '../styles/App.scss';
import friendsInfo from '../data/friends_info.json';
import { useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState(friendsInfo);
  const [newQuote, setnewQuote] = useState({
    quote: '',
    character: '',
  });
  const [search, setSearch] = useState('');

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

  const handleSearch = (ev) => {
    setSearch(ev.target.value)
    console.log(search);
  }


  const htmlQuotes = quotes
  .filter((quote) => quote.quote.toLocaleLowerCase().includes(search))
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
      <label htmlFor="search">Filtrar por frase</label>
      <input onChange={handleSearch} type="text" name="search" id="search" value={search} placeholder='¡Ay caramba!'/>
      
      <label htmlFor="">Filtrar por personaje</label>
      <select name="select">
        <option value="value0" defaultValue>Todos</option>
        <option value="value1">Ross</option>
        <option value="value2">Monica</option>
        <option value="value2">Joey</option>
        <option value="value2">Phoebe</option>
        <option value="value2">Rachel</option>
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
