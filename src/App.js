import './App.css';
import Table from './components/Table';
import firebase from './util/firebase';

function App() {
  const Users = 
    {
      Id : 0,
      Name : Math.random().toString(36).substring(4),
      Pseudo : Math.random().toString(36).substring(4)
    }
  
  const Add = ()=> {
    firebase
    .firestore()
    .collection("Test")
    .add(Users)
  }
  return (
    <div className="App">


        <Table/>


    </div>
  );
}

export default App;
