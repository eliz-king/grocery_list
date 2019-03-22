import React from 'react';

const Groceries = ({ id, itemName, price }) => (
  <li
    style={ complete ? { ...styles.groceries, ...styles.complete} : styles.groceries }
    onClick={ () => groceriesClick(id) }
    >
    { itemName } { price }
    </li>
);

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through'},
};


export default Groceries;