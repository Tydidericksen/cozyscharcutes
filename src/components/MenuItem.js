// MenuItem.js
import React, { useState } from 'react';
import Form from './Form'; // Import the Form component

function MenuItem({ image, name, price }) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="menuItem" onClick={toggleForm}> {/* Attach click event handler */}
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
      {showForm && <Form itemName={name} />} {/* Conditionally render the form */}
    </div>
  );
}

export default MenuItem;
