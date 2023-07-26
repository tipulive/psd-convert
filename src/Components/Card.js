import React from 'react';


const Card =  (props) => {
    const { className1, className2} = props;
  return (
    <div className={`card-container ${className1}`}>
      <div className={`card ${className2}`}>
        
       
      {props.children}
          
          
        
    </div>
    </div>
  );
};

export default Card;