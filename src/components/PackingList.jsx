import { useState } from "react";
import Item from "./Item";
import PropTypes from 'prop-types';

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
})
 {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
          key={item.id}/>
        ))}
      </ul>

      <div className="actions">
        <button onClick={onClearList}>Delete all</button>
      </div>
    </div>
  );
}
PackingList.propTypes = {
   items: PropTypes.array.isRequired,
   onDeleteItem: PropTypes.func.isRequired,
   onToggleItem: PropTypes.func.isRequired,
   onClearList: PropTypes.func.isRequired,
 };
