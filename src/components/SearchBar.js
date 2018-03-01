import React, { Component } from 'react';

/**
* Search bar for user-entered search terms
**/
class SearchBar extends Component {

  /*
  * state.term: video search term entered into bar
  */
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {

    return (
      <input
        // Select search bar by default so user can begin typing immediately
        autoFocus
        // Instructional text
        placeholder='Start typing to search videos!'
        className='search-bar'
        // When component renders/re-renders, receive search term value from state
        value={ this.state.term }
        // Update state on user input to be event.target.value
        onChange={
          ({ target }) => {
            this.onInputChange(target.value)
          }
        }
      />
    );
  }

  /**
  * Code to run when search bar input emits a Change Event
  * @param {Object} term The text currently in the search bar (event.target.value)
  **/
  onInputChange(term) {
    // Set component state
    this.setState({ term });
    // Fire off callback function
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;
