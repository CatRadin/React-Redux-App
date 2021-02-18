import './styles.css'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <div className="App">
      <div className='blur'>
      <div className ="red-bar">
        <h1>Get Pokemon</h1>
        </div>
      
      <Pokemon />
      </div>
    </div>
  );
}

export default App;
