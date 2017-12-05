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
      <div>
        <input id="hi" value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
        <br/>
        Value of the input : {this.state.term}
      </div>
    );
  }

  // static onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;