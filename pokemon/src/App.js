import './styles.css'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <div className="App">
      <div className='blur'>
      <div className ="red-bar">
        <h1>Get Pokemon</h1> <img src='https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif' alt='pokeball'></img>
        </div>
      
      <Pokemon />
      </div>
    </div>
  );
}

export default App;
