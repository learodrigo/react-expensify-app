import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Qty: <strong>{amount}</strong> - Date: <strong>{createdAt}</strong></p>
    
  </div>
);

export default ExpenseListItem;