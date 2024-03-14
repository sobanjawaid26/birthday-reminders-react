import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        
      </section>
    </div>
  );
}

export default App;
