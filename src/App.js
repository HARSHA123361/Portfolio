import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePortfolio from './components/Game/GamePortfolio';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path='/' element={<GamePortfolio />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
