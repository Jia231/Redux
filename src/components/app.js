import React, { Component } from 'react';
import BookList from '../container/book_list';
import BookDetail from '../container/book_detail';

export default class App extends Component {
  render() {
    //console.log('this is the app')
    return (
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
