import React from 'react';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const BuySell = () => {
  const Bsell = {
    color:'rgb(76, 89, 104)',
    lineHeight: '1.2',
    fontWeight: '800',
    fontSize:'14px' // You can specify font weight as well
  };
  return (
    <div className="divflex  mt-2">
    <div className="  mw-85">
    <div className="grid-container">
    <div className="grid-item">
    <div className="card-container">
      
      <div className="card div2-cut mln-30">
      <div  className="centered-div">
      <div className="circle-icon colorGd-blue mbn-05rem"><AttachMoneyIcon className='color-primary'/></div>
          <p style={Bsell}>Buy BTC</p>
    </div>
    </div>
       
    
    </div>
    </div>
    <div className="grid-item">
    <div className="divflex">
    
      <div className="card div2-cut mrn-20">
     <div  className="centered-div">
     <div className="circle-icon colorGd-pink mbn-05rem"><AttachMoneyIcon className='color-primary'/></div>
         <p style={Bsell}>Sell BTC</p>
     </div>
    </div>
       
   
    </div>
      
    </div>
  </div>

 
  </div>
  </div>
  );
};

export default BuySell;