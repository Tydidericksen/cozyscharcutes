import React from 'react';

function Form({ itemName }) {
  return (
    <div className="form">
      <h2>Order {itemName}</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor='specialInstructions'>Special Instructions:</label>
        <textarea id='specialInstructions' name='specialInstructions'></textarea>
        <div className='buttons'>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
