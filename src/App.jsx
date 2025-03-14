import { useState } from 'react';
import './App.css';

function App() {
  const [days, setDays] = useState(null);

  const dayscounter = () => {
    const date1 = document.getElementById('d1').value;
    const date2 = document.getElementById('d2').value;

    if (date1 && date2) {
      const diffTime = Math.abs(new Date(date2) - new Date(date1));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    } else {
      setDays(null);
    }
  };

  return (
    <>
      <div className='Container'>

      <input className="Date" id="d1" type="date" />
      <input className="Date" id="d2" type="date" />

      <button onClick={dayscounter}>Calculate Days</button>

      {days !== null && <p>Number of days: {days}</p>}

      </div>
    </>
  );
}

export default App;

