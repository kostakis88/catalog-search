import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterChange } from '../actions/index';
import SearchBar from './SearchBar';
import CardList from './CardList';

class App extends Component {

  state = {
    users: []
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

  render() {
    let filteredUsers = this.state.users.filter(user => {
      return user.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase());
    });
    return (
      <div>
        <SearchBar onChange={this.props.onSearchBarChange} value={this.props.searchField}/>
        <CardList users={filteredUsers}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchFilter.searchField
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchBarChange: (event) => dispatch(filterChange(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);