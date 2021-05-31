
import React from 'react';
import PeopleList from './components/PeopleList';
import AddContact from './components/AddContact';
import './App.css';



//nxt time we'll add a middleware to check if contact already exist
//and add a cuople of inputs for numbers and other stuff

function App() {


  return (
    <div className="App p-4">
      <AddContact />
      <PeopleList />
    </div>
  );

}

//if u were using a single thread for ur components (ie. all ur comps were here)
//then u'd need to put them in a var like below cos connect returns a new comp that wraps the supplied comp...
// const ConnectedList = connect(mapStateToProps)(PeopleList);

export default App;
