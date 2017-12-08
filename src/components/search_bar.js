import React, { Component } from 'react';

class SearchBar extends Component  {
  constructor (props)  {
    super(props);

    this.state = { term: '' };  // only place where state is set using this format. Other places, this.setState() is used.

  }

  render()  {
    // return  <input onChange={event => console.log(event.target.value)} />;
    // return  <input onChange={SearchBar.onInputChange} />;
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // static onInputChange(event) {
  //   console.log(event.target.value);
  // }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;