import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Maps from './components/Maps';
import Nobel from './components/Nobel';
import Xmas from './components/Xmas';
import Footer from './components/Footer';
import './App.css';
import './index.css';

function App() {
  return (
      <div className='App'>
      <Navbar />
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/tasks" render={() => <Tasks />} />
            <Route path="/maps" render={() => <Maps />} />
            <Route path="/nobel" render={() => <Nobel />} />
            <Route path="/xmas" render={() => <Xmas />} />
       </Switch>
            <Footer />
        </div>
  );
}

export default App;
