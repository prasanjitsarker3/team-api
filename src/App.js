import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import footballData from './components/Data/Data.json';
import { useEffect, useState } from 'react';
import Team from './components/Team/Team';
import Teamcart from './components/Teamcart/Teamcart';

function App() {
  const [football, setFootball] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    setFootball(footballData);
     

  },[])
  const handleTeam = (football) => {
    const newCount = [...cart, football];
         setCart(newCount);
  }
  return (
    <div>
         <div className="card-container" >
           <h1>World  FootBall Club</h1>
           <Teamcart cart={cart}></Teamcart>
        </div>

        <div className="homeDetails ">
        
        {
          football.map(footBall => <Team football={footBall} handleTeam={handleTeam}></Team>  )
        }
    
        </div>
        
        
    </div>
    
    
  );
}

export default App;
