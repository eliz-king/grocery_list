import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through'},
};

const Groceries = ({ id, itemName, price, groceriesClick, complete, remove }) => (
  <Table.Row>
    <Table.Cell style={ complete ? { ...styles.todo, ...styles.complete} : styles.todo }
    onClick={ () => groceriesClick(id) }>{itemName}</Table.Cell>
    <Table.Cell>${price}</Table.Cell>
    <Table.Cell>
      <Button color='blue' onClick={() => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
)


export default Groceries;