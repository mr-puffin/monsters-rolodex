import React, { Component } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import { getMonsters } from "./services/monsterService";

import "./App.css";

class App extends Component {
  state = {
    monsters: [], // properties: id; name, username,
    searchQuery: ""
  };

  async componentDidMount() {
    // call api to load data and setState
    const monsters = await getMonsters();
    this.setState({ monsters });
  }

  handleChange = e => {
    const searchQuery = e.currentTarget.value;
    this.setState({ searchQuery });
  };
  render() {
    const { monsters, searchQuery } = this.state;
    let filteredMonsters = monsters;
    if (searchQuery) {
      filteredMonsters = filteredMonsters.filter(m =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeHolder="search monsters..."
          onChange={this.handleChange}
        />
        <CardList items={filteredMonsters} />
      </div>
    );
  }
}

export default App;
