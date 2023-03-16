import './App.css';
import Header from './components/header';
import PersonAdd from './components/PersonAdd';
import PersonList from './components/PersonList';
import PersonRemove from './components/PersonRemove';


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
      <PersonAdd></PersonAdd>
      <hr></hr>
      <PersonRemove></PersonRemove>
      <hr></hr>
    </div>


  );
}



export default App;
