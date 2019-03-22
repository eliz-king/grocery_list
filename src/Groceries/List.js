import React from 'react';
import Groceries from './Groceries';


const List = ({items, name}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {
        items.map(item => <Groceries key={item.id} {...item} groceriesClick={groceriesClick}/>)
      }
    </ul>
  </div>
)


export default List;