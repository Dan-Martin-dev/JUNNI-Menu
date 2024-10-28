import React, { useEffect, useState } from "react";
import "/home/vare/project/landings_1/JUNNI_MENU/src/styles/Home.css"; // Assuming your styles are here


const TileBoard: React.FC = () => {
  const [ROWS, setRows] = useState(6);
  const [COLS, setCols] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Change this value based on your breakpoints
        setRows(3);
        setCols(3);
      } else {
        setRows(6);
        setCols(6);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Separate states for flipped and hovered tiles
  const [flippedTiles, setFlippedTiles] = useState<{ [key: string]: boolean }>({});
  const [hoveredTiles, setHoveredTiles] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (rowIndex: number, colIndex: number) => {
    const tileKey = `${rowIndex}-${colIndex}`;
    setHoveredTiles((prev) => ({ ...prev, [tileKey]: true }));
    
    // Optionally remove the hovered state after a delay if needed
    setTimeout(() => {
      setHoveredTiles((prev) => ({ ...prev, [tileKey]: false }));
    }, 250); 
  };  

  const flipAllTiles = () => {
    setFlippedTiles((prev) => {
      const newFlippedTiles: {[ key: string]: boolean} = {};
      // Iterate over all possible tiles and flip their state
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const tileKey = `${row}-${col}`;
          // Toggle the flipped state
          newFlippedTiles[tileKey] = !prev[tileKey];
        }
      }
      return newFlippedTiles;
    });
  };

  return (
    <div className="board">
      <a
        className="grid-button absolute text-pink-200 top-8 left-8 no-underline uppercase text-3xl z-10 bg-black"
        href="#"
      >
        DAN MARTIN
      </a>
      <button
        className="grid-button absolute top-8 right-8 border-none outline-none text-pink-200 bg-black rounded-sm z-10"
        id="flipButton"
        onClick={flipAllTiles} // Attach the flipAllTiles function to the button
      >
        FLIP
      </button>

      {/* Board (bidimensional array) */}
      {Array.from({ length: ROWS }, (_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: COLS }, (_, colIndex) => {
            const tileKey = `${rowIndex}-${colIndex}`;
            const isFlipped = flippedTiles[tileKey];
            const isHovered = hoveredTiles[tileKey];

            return (
              <div
                className={`tile ${isFlipped || isHovered ? "flip" : ""}`}
                key={colIndex}
                onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              >
                <div
                  className="tile-face tile-front"
                  style={{
                    backgroundPosition: `${(colIndex / (COLS - 1)) * 100}% ${
                      (rowIndex / (ROWS - 1)) * 100
                    }%`,
                  }}
                ></div>

                <div
                  className="tile-face tile-back"
                  style={{
                    backgroundPosition: `${(colIndex / (COLS - 1)) * 100}% ${
                      (rowIndex / (ROWS - 1)) * 100
                    }%`,
                  }}
                ></div>
              </div>
            );

          })}
        </div>
      ))}

      <div className="blocks-container">
        <div id="blocks">
          {Array.from({ length: ROWS * COLS }, (_, blockIndex) => (
            <div key={blockIndex} className="block"></div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default TileBoard;
