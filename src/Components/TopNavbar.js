import React, { useState } from 'react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import MoreVert from '@mui/icons-material/MoreVert';
import UploadIcon from '@mui/icons-material/Upload';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import PaymentIcon from '@mui/icons-material/Payment';
import './TopNavbar.css';

const TopNavbar = () => {
    const [isShown, setIsShown] = useState(true);


    const toggleVisibility = () => {
        setIsShown((prevIsShown) => !prevIsShown);
      };
  return (
    <div>
    <nav className="navbar">
     
     <a href="/"><ArrowBackIos className='color-muted'/></a>
    <h3 className='title-bar'>Bitcoin Wallet</h3>
    <a href="#Hide" id="dropdownIcon"><MoreVert onClick={toggleVisibility} className='color-muted'/></a>
                
    </nav>
    <div className={`overlay  ${isShown ? 'd-none' : 'd-block'}`} onClick={toggleVisibility}> </div>
    <div className={`dropdown-content ${isShown ? 'd-none' : 'd-block'}`}>
        <ul>
                    
    
       

        <li> <a href="#Test" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none',fontSize:'12px' }}>
        Edit
        <EditCalendarIcon className='dropMenu' />
       
      </a></li>
      <li className="menu-divider"></li>
        <li> <a href="#Test" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none',fontSize:'12px' }}>
        Courier info
        <PaymentIcon className='dropMenu' />
       
      </a></li>
        <li className="menu-divider"></li>
        <li> <a href="#Test" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none',fontSize:'12px' }}>
        share
        <UploadIcon className='dropMenu' />
       
      </a></li>
       
        <li className="menu-divider"></li>
        <li> <a href="#Test" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none',color: 'red',fontSize:'12px' }}>
        Remove
        <RemoveCircleOutlineIcon className='dropMenu' />
       
      </a></li>
        
                       
                       
        </ul>
    </div>
    </div>
  );
};

export default TopNavbar;
