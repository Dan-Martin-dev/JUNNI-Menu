/* To give the tiles a 3D tilt effect based on their column position, we can apply a `transform` effect to each tile depending on whether it's in the left, middle, or right section of the board. This approach will make tiles in each area tilt in a different direction on hover.

Here's how to do it:

### Step 1: Update the `TileBoard` Component

In the component, add a conditional class based on the column index to apply the right rotation for each tile position:
 */

const getTiltDirection = (colIndex: number) => {
  if (colIndex < 2) return "tilt-left";
  if (colIndex >= COLS - 2) return "tilt-right";
  return "tilt-center";
};


/* Apply this `getTiltDirection` function in the `className` of each tile:

```jsx */
<div
  className={`tile ${isFlipped ? "flip" : ""} ${getTiltDirection(colIndex)}`}
  key={colIndex}
  onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
>
  {/* Tile Faces */}
</div>

/* ### Step 2: Add CSS for Tilt Effects

Add CSS classes to control the tilt effect on hover for the left, right, and center tiles. This will give them the desired 3D perspective effect.
 */
```css
.tile {
    flex: 1;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
    cursor: pointer;
}

.tilt-left:hover {
    transform: rotateY(-10deg);
}

.tilt-center:hover {
    transform: rotateX(10deg);
}

.tilt-right:hover {
    transform: rotateY(10deg);
}
```
/* 
### Explanation of CSS Transformations
- `.tilt-left:hover`: Rotates tiles in the left columns slightly to the left using `rotateY(-10deg)`.
- `.tilt-center:hover`: Rotates tiles in the middle with a slight vertical tilt using `rotateX(10deg)`.
- `.tilt-right:hover`: Rotates tiles in the right columns to the right using `rotateY(10deg)`.

### Step 3: Ensure Perspective for 3D Effect

Ensure the parent `.board` container has `perspective` applied to make the 3D tilt visible:
 */
```css
.board {
    width: 100vw;
    height: 100vh;
    padding: 0.25em;
    display: flex;
    flex-direction: column;
    gap: 0.15em;
    perspective: 1000px; /* Ensures 3D perspective */
    background-color: black;
    position: relative;
}
/* ```

/* This setup should give you the 3D effect where tiles tilt differently based on their position when hovered. Adjust the `rotateY` and `rotateX` 
values as needed to get the tilt intensity that looks best for your design. */ 