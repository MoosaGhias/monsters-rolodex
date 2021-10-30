import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';



class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({monsters: user}))
      //the .then user fills up teh monsters array with the user which is the data that came from the json
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Employees</h1>
        

        <SearchBox
          placeholder ='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
        
      </div>
    );
  }
}

export default App;


