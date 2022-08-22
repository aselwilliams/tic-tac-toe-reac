import './index.css';
import Square from './components/Square'

//Steps:
//Create Square Component
//Create Board Component
//Display X or O dynamically
//Calculate Came Winner
//Show player making the turn
//Restart the game

function App() {
  return (
    <div className="App">
     <Square value={'X'}/>
    </div>
  );
}

export default App;
