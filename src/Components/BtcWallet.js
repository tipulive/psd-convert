import React, { useContext } from 'react';
import CurrencyBitcoin from '@mui/icons-material/CurrencyBitcoin';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppContext } from '../AppContext'; // Import the context
import Card from './Card';

const BtcWallet = () => {
  const Btc1 = {
    lineHeight: 1.2,
    fontWeight:600,
    fontSize:'smaller', // You can specify font weight as well
  };
  const Btc2 = {
    paddingleft: '12px',
    fontweight: '500',
    fontsize: '13px',
    linebreak: '-2px',

    lineheight:'1.2'
  };
  
  const {toggleContentVisibility } = useContext(AppContext);
  // Access the context value
  return (
   <div>
    <Card  className1="mt-5" className2="p-15 mw-85">
  
    <div className="grid-container">
    <div className="grid-item">
    <Card >
    <div className="div-right">
        <div className="circle-icon colorGd-yellow "><CurrencyBitcoin className="color-primary"/></div>
          <p className='pl-05' style={Btc1}>Bitcoin</p>
        </div>
        <div>
          <h3>3.529020 BTC</h3>
          
          
        </div>
      </Card>
   
    </div>
    <div className="grid-item ">
    <Card  className2="p-10  color-muted">
    <p className="mt-5x" style={Btc2}>BTC</p>
    </Card>
   
      
    </div>
  </div>

  <div className="grid-container plr-10  mtNe-205">
    <div className="grid-item mt-5x">
      <h5 className="color-muted">$19.153 USD</h5>
      
    </div>
    <div className="grid-item">
    <div className="card-container ">
    <h6 className="circle-round colorBG-pink ">-2.32%</h6>
    </div>
      
    </div>
  </div>
 
  </Card>
  <div className="text-center">
  <KeyboardArrowDownIcon className="arrowDown color-muted" onClick={toggleContentVisibility} />
  </div>
   </div>
  );
};

export default BtcWallet;