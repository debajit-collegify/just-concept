import React, { Component } from 'react';
import './App.css';
/*import Refdomexample from './components/refdomexample';
import LifeCycleMethodPart1 from './components/lifeCycleMethodPart1';
import RefInstanceParent from './components/refInstanceParent';*/

/*import Parent from './components/instanceExample/Parent';*/
import EditParent from './components/editWithInstance/EditParent';

class App extends Component {
  render() {
    return (
      <div className="App">
            <h2>Hello User</h2>
            
            
            <EditParent />
      </div>
    );
  }
}

export default App;

/*<Refdomexample title="Enter Event Focus Change for Input Filed"/>*/
