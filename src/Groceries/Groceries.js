import React from 'react';

const Groceries = ({ id, itemName, price, groceriesClick }) => (
  <li
    onClick={ () => groceriesClick(id) }
    >
    { itemName } ${ price }
    </li>
);

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through'},
};


export default Groceries;