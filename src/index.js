import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//include components

import ContactList from './components/contact-list/contact-list.js'


class App extends React.Component{
  render (){
    return (
      <div className="container">
        <h1>Hello</h1>
        {/* <SearchEdit /> */}
        <ContactList />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))