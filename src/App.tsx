import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface Istate{
  people: {
    name: string
    age:number
    url:string
    note?: string
  }[]
}

function App() {

  const[people, setPeople] = useState<Istate["people"]>([{

    name: "Lebron James",
    url:"https://upload.wikimedia.org/wikipedia/commons/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg",
    age:36,
    note:"Allergic to staying on the same team"
  }])



  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people = {people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
