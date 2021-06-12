import React from 'react';
import PeopleList from './components/PeopleList';
import Header from './components/header';
import ModalForm from './components/FormModal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import View from './components/view';



//nxt time we'll add a middleware to check if contact already exist
//and add a cuople of inputs for numbers and other stuff

function App() {


  return (
    <Router>
      <div className="App">
        <ModalForm />
        <Header />
        <div className='content p-4'>
          <Switch>
            <Route exact path='/'>
              <PeopleList />
            </Route>
            <Route path='/view-contact/:id'>
              <View />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );

}

//if u were using a single thread for ur components (ie. all ur comps were here)
//then u'd need to put them in a var like below cos connect returns a new comp that wraps the supplied comp...
// const ConnectedList = connect(mapStateToProps)(PeopleList);

export default App;
