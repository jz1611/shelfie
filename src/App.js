import React from 'react';
import axios from 'axios';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
    }

    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios
      .get('/api/inventory')
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Dashboard inventory={ this.state.inventory } />
        <Form getInventory={ this.getInventory }/>
        <Header />     
      </div>
    );
  }
}

export default App;
