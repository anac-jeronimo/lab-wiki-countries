import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList (props) {
 return (
     <React.Fragment>
         {props.contries.map((element) => {
             return (
                 <Link key={element} className='list-group-item list-group-item-action' to={'/' + element.cca3}>
                 <span role='img'>{element.flag}</span> {element.name.common}
                 </Link>
             )
         })}
     </React.Fragment>
 )
}


export default CountriesList;