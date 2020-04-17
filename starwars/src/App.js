import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NavItem, Nav, NavLink, TabContent, TabPane} from 'reactstrap';
import './App.css';
import classnames from 'classnames';
import Character from './components/Character';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const url = 'https://rickandmortyapi.com/api/'
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`${url}character`)
      .then(response => {
        console.log(response);
        setData(response.data.results);
      })
      .catch(error => {
        console.log('The data was not retrieved', error);
      })
  }, [])
  return (
    <div className="App">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
            Characters
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
              More Stuf
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} >
        <TabPane tabId="1">
          <Character data = {data} />
        </TabPane>
        <TabPane tabId='2'>
          
        </TabPane>
      </TabContent>
    </div>
  );
}

export default App;
