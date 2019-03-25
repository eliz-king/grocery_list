import React from 'react';

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through'},
};

const Groceries = ({ id, itemName, price, complete, groceriesClick }) => (
  <li
  style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery }
    onClick={ () => groceriesClick(id) }
    >
    { itemName } ${ price }
    </li>
);


export default Groceries;