import React from 'react';
import Groceries from './Groceries';
import { Table } from 'semantic-ui-react';


const List = ({items, groceriesClick, remove}) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    
    <Table.Body>
      {
        items.map( item => (
          <Groceries key={item.id} {...item} groceriesClick={groceriesClick} remove={remove} />
          ))
          
      }
    </Table.Body>
    </Table>
)


export default List;