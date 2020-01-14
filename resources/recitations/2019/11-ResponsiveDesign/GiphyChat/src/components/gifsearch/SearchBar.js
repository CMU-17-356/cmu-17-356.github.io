import React from "react";
import { Input } from 'semantic-ui-react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <Input icon='search' focus placeholder='Search...' onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
