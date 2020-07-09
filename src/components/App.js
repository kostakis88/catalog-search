import React, { Component } from 'react';
import SearchBar from './SearchBar';
import CardList from './CardList';

class App extends Component {

  state = {
    users: [],
    searchField: ''
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(result => {
      this.setState({
        users: result
      })
    })
  }

  handleSearchBarChange = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    let filteredUsers = this.state.users.filter(user => {
      return user.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    });
    return (
      <div>
        <SearchBar onChange={this.handleSearchBarChange} value={this.state.searchField}/>
        <CardList users={filteredUsers}/>
      </div>
    );
  }
}

export default App;