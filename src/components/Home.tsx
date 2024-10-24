import React, { useState } from 'react';
import '/home/vare/project/landings_1/JUNNI_MENU/src/styles/Home.css'; // Assuming your styles are here

interface Tile {
    id: string;
    flipped: boolean;
}

const TileBoard: React.FC = () => {

  const ROWS = 6;
  const COLS = 6;

  // Create the state for tiles, initializing all as not flipped
  const [tiles, setTiles] = useState<Tile[][]>(
    Array.from({ length: ROWS }, (_, rowIndex) => 
      Array.from({ length: COLS }, (_, colIndex) => ({
        id: `${rowIndex}-${colIndex}`,
        flipped: false
      }))
    )
  );

  return (
    <div className="board">
        
      {Array.from({ length: ROWS }, (_, rowIndex) => (
        <div key={rowIndex} className="row">
         {Array.from({ length: COLS }, (_, colIndex) => (
            <div key={colIndex} className="tile">
              <div 
                className="tile-face tile-front"
                style={{
                  backgroundPosition: `${(colIndex / (COLS - 1)) * 100}% ${(rowIndex / (ROWS - 1)) * 100}%`
                }}
              ></div>
              <div 
                className="tile-face tile-back"
                style={{
                  backgroundPosition: `${(colIndex / (COLS - 1)) * 100}% ${(rowIndex / (ROWS - 1)) * 100}%`
                }}
              ></div>
            </div>
          ))}
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
