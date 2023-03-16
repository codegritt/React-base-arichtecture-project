import './App.css';
import Header from './components/header';
import PersonList from './components/PersonList';


function App() {
  return (
    <div className="App">
      <h1>(App component)</h1>
      <h2>Gokul's react base architecture project</h2>
      <hr></hr>

      <Header first_name="gokul" last_name="chandan" age="28" message="Gokul's message is here"></Header>
      <hr></hr>
      <PersonList></PersonList>
      <hr></hr>
    </div>


  );
}



export default App;
