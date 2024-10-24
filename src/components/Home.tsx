
import '/home/vare/project/landings_1/JUNNI_MENU/src/styles/Home.css'

const Home = () => {
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