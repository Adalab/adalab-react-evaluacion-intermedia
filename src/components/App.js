import '../styles/App.scss';
import friendsInfo from '../data/friends_info.json';
import { useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([friendsInfo]);

  const htmlQuotes = friendsInfo.map((quote, i) => {
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
        <ul>
          {htmlQuotes}
        </ul>
      </div>
    </div>
  );
}

export default App;
