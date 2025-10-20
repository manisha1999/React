import React, { useState } from 'react'

function DragAndDropTouch() {
    const [items,setItems] = useState(['Item1', 'Item2','Item3'])
    const [draggedIndex, setdraggedIndex] = useState(null)
    const [touchTracking, setTouchTracking] = useState(null)

    const handleDragStart = (e,index) =>{
        setdraggedIndex(index)
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDragEnd = () => {
        setdraggedIndex(null);
    };

    const handleDrop = (e,dropIndex) => {

        if (draggedIndex == null || draggedIndex == dropIndex)
        {
            setdraggedIndex(null)
        }

        const newItems = [...items]
        const draggedItem = newItems[draggedIndex]
        newItems.splice(draggedIndex,1)
        newItems.splice(dropIndex,0,draggedItem)
        setItems(newItems);
        setdraggedIndex(null);


    }

    const handleTouchStart = (e, index) => {
        // We don't call preventDefault here; we let touchMove handle it to allow scrolling if needed
        setdraggedIndex(index);
        setTouchTracking({
            index: index,
            initialY: e.touches[0].clientY,
            // Store a reference to the item's DOM element for visual manipulation
            element: e.currentTarget,
        });
    };

    const handleTouchMove = (e) => {
        if (draggedIndex === null || !touchTracking) return;

        // Prevent scrolling while actively dragging an element
        e.preventDefault(); 
        
        // Calculate the difference in Y and apply visual translation
        const deltaY = e.touches[0].clientY - touchTracking.initialY;
        touchTracking.element.style.transform = `translateY(${deltaY}px) scale(1.05)`;
    };

    const handleTouchEnd = (e) => {
        if (draggedIndex === null || !touchTracking) return;

        // Reset visual translation
        touchTracking.element.style.transform = '';
        
        // Find all draggable item elements for position calculation
        const itemElements = Array.from(e.currentTarget.parentNode.children)
            .filter(child => child.classList.contains('item') && child.getAttribute('draggable'));

        // Determine the drop position based on the final touch Y-coordinate
        let finalDropY = e.changedTouches[0].clientY;
        let dropIndex = items.length; // Default insertion index (end of list)

        // Find the insertion point
        for (let i = 0; i < itemElements.length; i++) {
            const rect = itemElements[i].getBoundingClientRect();
            // If the drop position is before the midpoint of this item, insert here
            if (finalDropY < rect.top + rect.height / 2) {
                dropIndex = i;
                break;
            }
        }
        
        // Finalize reorder logic
        const newItems = [...items];
        const draggedItem = newItems[draggedIndex];
        newItems.splice(draggedIndex, 1);
        
        // Adjust dropIndex for correct insertion after removal
        let finalIndex = dropIndex > draggedIndex ? dropIndex - 1 : dropIndex;

        if (finalIndex === draggedIndex) {
             setdraggedIndex(null);
             setTouchTracking(null);
             return;
        }

        newItems.splice(finalIndex, 0, draggedItem);
        setItems(newItems);

        setdraggedIndex(null);
        setTouchTracking(null);
    };



  return (
    <div>
        {items.map((item,index)=>{
            <div
                key ={item}
                draggable
                        className={`item ${draggedIndex === index ? 'dragging' : ''}`}
                        onDragStart = {(e) => handleDragStart(e,index)}
                        onDragOver = {handleDragOver}
                        onDrop = {(e) => handleDrop(e, index)}
                        onDragEnd = {handleDragEnd}
                        
                        // Touch events for mobile
                        onTouchStart = {(e) => handleTouchStart(e, index)}
                        onTouchMove = {handleTouchMove}
                        onTouchEnd = {handleTouchEnd}
            >
                {item}
            </div>
        })}
    </div>
  )
}

export default DragAndDropTouch