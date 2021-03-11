import './App.css';
import TableUI from './components/TableUI';
import firebase from './util/firebase';

function App() {
  const Users = 
    {
      Id : 3,
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


        <TableUI/>
        <button onClick={Add}>Add</button>

    </div>
  );
}

export default App;
