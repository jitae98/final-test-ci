import PropTypes from 'prop-types';

   export default function Stats({ items }) {
      if (!items.length)
      return (
         <p className="stats">
            <em>Add task!</em>
         </p>
      );
   
      const numItems = items.length;
      const numPacked = items.filter((item) => item.packed).length;
      
   
      return (
      <footer className="stats">
         <em>
            <p>
               <h4>All: {numItems}</h4>
               <h4>Active: {numItems - numPacked}</h4>
               <h4>Completed: {numPacked}</h4>
            </p>
         </em>
      </footer>
      );
   }
   
Stats.propTypes = {
   items: PropTypes.array.isRequired,
 };