import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="game-container">
      <Card shape={"circle"} color={"blue"}/>
      <Card shape={"square"} color={"red"}/>
      <Card shape={"star"} color={"blue"}/>
      <Card shape={"diamond"} color={"red"}/>
      <Card shape={"heart"} color={"blue"}/>
      <Card shape={"square"} color={"red"}/>
      <Card shape={"circle"} color={"blue"}/>
      <Card shape={"square"} color={"red"}/>
    </div>
  );
}

export default App;
