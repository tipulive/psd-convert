import React, { useContext } from 'react';
import Chart from './Components/Chart';
import TopNavbar from './Components/TopNavbar';
import FooterNavbar from './Components/FooterNavbar';
import BtcWallet from './Components/BtcWallet';

import BuySell from './Components/BuySell';
import { AppContext } from './AppContext'; // Import the context

function App() {
  const { isContentVisible} = useContext(AppContext);
  return (
    <div className="App">
     
      <BtcWallet/>
      <TopNavbar/>
    
      <Chart />
      {isContentVisible && <BuySell className="fade-in-out"/>}
      
      <FooterNavbar/>
     
     
      
    </div>
  );
}

export default App;
