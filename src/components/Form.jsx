import { useState } from "react";
import PropTypes from 'prop-types';

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  
  

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      
      <input
        type="text"
        placeholder="Add details"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

Form.propTypes = {
   onAddItems: PropTypes.func.isRequired,
 };
