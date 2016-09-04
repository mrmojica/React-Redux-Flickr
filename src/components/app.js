import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import GalleryList from '../containers/gallery-list';


export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<GalleryList />
      </div>
    );
  }
}
