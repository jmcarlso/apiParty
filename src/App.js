import React, { Component } from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'
import Github from './Github'
import Googlemap from './Map'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className ="App-headings">
            <h3>Ain't No Party Like</h3>
             <h1> an API Party </h1>
           </div>
          <ul className ="nav-link">
              <li>
              <NavLink to="/github">Github API</NavLink>
              </li>
              <li>
                <NavLink to="/Map">Google Maps </NavLink>
              </li>
              </ul>

         </div>
        <Switch>
          <Route path='/github' component={Github} />
          <Route path='/Map' component={Googlemap} />
          <Route render= {() => <p>To get started, click one of the links above</p>}/>

          // AIzaSyCwz4S_tTdnHwzKtxlb8ZBPkS7Ik2m6ybA
         
          
          



        </Switch>


      </div>
    );
  }
}

export default App;
