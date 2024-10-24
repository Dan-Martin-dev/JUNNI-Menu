
import { useEffect, useState } from 'react';
import '/home/vare/project/landings_1/JUNNI_MENU/src/styles/Home.css'

const Home = () => {
  const ROWS = 6;
  const COLS = 6;
  const BLOCK_SIZE = 6;
  const COOLDOWN = 6;
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    createFiles(ROWS, COLS);
  }, []);

  const createFiles = (rows, cols) => {
    const newTiles = [];
    for (let row = 0; row < rows; row++) {
      const rowTiles = [];
      for (let col = 0; col < cols; col++) {
        rowTiles.push({ id: `${row}-${col}`, flipped: false });
      }
      newTiles.push(rowTiles);
    }
    setTiles(newTiles);
  };

  const flipTile = (row, col) => {
    // Flip logic here, e.g. toggle the flipped state
    const updatedTiles = tiles.map((rowTiles, rIndex) =>
      rowTiles.map((tile, cIndex) => 
        rIndex === row && cIndex === col ? { ...tile, flipped: !tile.flipped } : tile
      )
    );
    setTiles(updatedTiles);
  };
  return (
    <div>
      <nav className="flex  w-screen justify-between items-center pointer-events-none p-32 z-10">
        
        <a className='absolute text-white top-8 left-8 no-underline uppercase text-3xl' href="#">CODEGRID</a>
        <button className='absolute top-8 right-8 border-none outline-none text-white bg-black rounded-sm' id='flipButton'>Flip tiles</button>

        <section className="board"></section>

        <div className="blocks-container">
          <div className="blocks"></div>
        </div>

      </nav>

    </div>
  )
}

export default Home