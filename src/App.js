import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="game-container">
      <Card shape={"circle"} color={"blue"}/>
      <Card shape={"circle"} color={"red"}/>
    </div>
  );
}

export default App;
