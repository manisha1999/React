import React, { useState } from 'react';
import './DragAndDrop.css'; // Importing the necessary styles

function DragAndDrop() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
    const [draggedIndex, setDraggedIndex] = useState(null);

    // 1. Store the index of the item that started dragging
    const handleDragStart = (e, index) => {
        setDraggedIndex(index);
        e.dataTransfer.effectAllowed = "move";
    };

    // 2. Prevent default behavior to allow dropping
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // 3. Handle the drop event (Receives the index of the drop target)
    const handleDrop = (e, dropIndex) => {
        e.preventDefault();

        if (draggedIndex === null || draggedIndex === dropIndex) {
            setDraggedIndex(null);
            return;
        }

        const newItems = [...items];
        
        // 1. Get the item being dragged
        const draggedItem = newItems[draggedIndex];
        
        // 2. Remove the item from its original position
        newItems.splice(draggedIndex, 1);
        
        // 3. Insert the item at the new drop position (using the passed dropIndex)
        newItems.splice(dropIndex, 0, draggedItem);
        
        // CRITICAL FIX: Update the state with the NEW array
        setItems(newItems);
        setDraggedIndex(null); 
    };

    // 4. Handle drag end (cleanup)
    const handleDragEnd = () => {
        setDraggedIndex(null);
    };


  return (
    <div className="dnd-container">
        <h2>Simple Drag & Drop Reorder</h2>
        {items.map((item, index) => { // FIX: Added return statement below
            return (
                <div 
                    key={item}
                    draggable
                    className={`item ${draggedIndex === index ? 'dragging' : ''}`}
                    onDragStart = {(e) => handleDragStart(e,index)}
                    onDragOver = {handleDragOver}
                    // CRITICAL FIX: Changed onDragDrop to onDrop and passed the index
                    onDrop = {(e) => handleDrop(e, index)}
                    onDragEnd = {handleDragEnd}
                >
                    {item}
                </div>
            );
        })}
        <div className='item' style={{ marginTop: '1rem', cursor: 'default', backgroundColor: '#eef2ff' }}>
            Drop items above to reorder.
        </div>
    </div>
  );
}


export default DragAndDrop;
