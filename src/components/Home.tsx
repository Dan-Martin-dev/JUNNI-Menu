import React, { useState } from "react";
import "/home/vare/project/landings_1/JUNNI_MENU/src/styles/Home.css"; // Assuming your styles are here

interface Tile {
  id: string;
  flipped: boolean;
}

const TileBoard: React.FC = () => {
  const ROWS = 6;
  const COLS = 6;

  const [flippedTiles, setFlippedTiles] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleMouseEnter = (rowIndex: number, colIndex: number) => {
    const tileKey = `${rowIndex}-${colIndex}`;
    setFlippedTiles((prev) => ({ ...prev, [tileKey]: true }));

    // Optionally remove the flipped class after a delay if needed
    setTimeout(() => {
      setFlippedTiles((prev) => ({ ...prev, [tileKey]: false }));
    }, 200); // Delay for the flip effect duration
  };
  
  return (
    <div className="board">
      {Array.from({ length: ROWS }, (_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: COLS }, (_, colIndex) => {
            const tileKey = `${rowIndex}-${colIndex}`;
            const isFlipped = flippedTiles[tileKey];

            return (
              <div
                className={`tile ${isFlipped ? "flip" : ""}`}
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
