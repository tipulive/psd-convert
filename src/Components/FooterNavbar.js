import React,{ useState,useEffect } from 'react';
import Settings from '@mui/icons-material/Settings';
import Notifications from '@mui/icons-material/Notifications';
import Explore from '@mui/icons-material/Explore';
import Wallet from '@mui/icons-material/Wallet';
import './FooterNavbar.css';
import { AppContext } from '../AppContext';

const FooterNavbar = (items) => {
  const [isActive, setIsActive] = useState(AppContext);
  useEffect(() => {
    setIsActive("4");
  }, [/* dependencies */]);
  const handleClick = (index) => {
    setIsActive(index);
  };
  return (
    <div className="footer">
    <div className="footer-icons ">
    
        <a href="#Wallet"  onClick={() => handleClick('4')}><Wallet className={`color-secondary ${isActive ==='4'?'color-secondary' : 'color-muted'}`} /></a>
        <a href="#Explore"  onClick={() => handleClick('5')}><Explore className={`${isActive ==='5'?'color-secondary' : 'color-muted'}`} /></a>
        <a href="#Notification"  onClick={() => handleClick('6')}><Notifications className={`${isActive ==='6'?'color-secondary' : 'color-muted'}`} /></a>
        <a href="#settings" onClick={() => handleClick('7')}><Settings className={`${isActive ==='7'?'color-secondary' : 'color-muted'}`} /></a>
     
    </div>
</div>
  );
};

export default FooterNavbar;