import React from 'react';
import Settings from '@mui/icons-material/Settings';
import Notifications from '@mui/icons-material/Notifications';
import Explore from '@mui/icons-material/Explore';
import Wallet from '@mui/icons-material/Wallet';
import './FooterNavbar.css';

const FooterNavbar = () => {
  return (
    <div className="footer">
    <div className="footer-icons ">
        <a href="#Wallet"><Wallet className='color-secondary '/></a>
        <a href="#Explore"><Explore className='color-muted iconActive'/></a>
        <a href="/"><Notifications className='color-muted'/></a>
        <a href="/"><Settings className='color-muted'/></a>
    </div>
</div>
  );
};

export default FooterNavbar;