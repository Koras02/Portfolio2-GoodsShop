import React from 'react';
import './DescriptMove.scss'
import {FiShoppingCart,FiArrowRight} from 'react-icons/fi';
import {FaCar, FaTruck} from 'react-icons/fa'
 
export const SubVisualOne = ({
   title,
   description,
   description2,
   description3,
   description4
}) => {
     return (
       <div id="Go" className="Wrapper">
         <div className="DescriptionH1">
               {title}
         </div>
         <FiShoppingCart className="FiShoppingCart" size="90px"/>
         <h1 className="FiShoppingCartDescription">
           {description}
         </h1>
         <FiArrowRight className="FiShoppingCartRight" size="60px"/>
         <FaCar className="FaCars" size="90px"/>
         <h1 className="FiShoppingCartDescription2">
           {description2} <br />
           {description3} 
         </h1>
         <FiArrowRight className="FiShoppingCartRight2" size="60px"/>
          <FaTruck className="FaTruck" size="90px"/>
         <h1 className="FiShoppingCartDescription3">
            {description4}
         </h1>
       </div>
     );
 }


 export default SubVisualOne;