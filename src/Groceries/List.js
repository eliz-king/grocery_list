import React from 'react';
import Groceries from './Groceries';
import { Button, } from 'semantic-ui-react';


const List = ({items, name, groceriesClick}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {
        items.map(item => <Groceries key={item.id} {...item} groceriesClick={groceriesClick}/>)
      }
    </ul>
    <Button color='blue' onClick={() => remove(id)}>
       Delete
    </Button>
  </div>
)


export default List;