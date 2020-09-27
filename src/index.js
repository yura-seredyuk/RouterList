import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'react-uuid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


//include components

import ContactList from './components/contact-list/contact-list.js'
import EditContact from './components/edit-contact/edit-contact.js'
import NotFound from './components/not-found/not-found.js'
import Header from './components/header/header.js'



class App extends React.Component {
  URL = "https://itstepproject-e9861.firebaseio.com/list.json";
  state = {
    // list: [],
    list: [
      {
        id: uuid(),
        name: 'Mike Anamendolla',
        address: '5842 Hillcrest Rd',
        phone: '(870) 288-4149',
        email: 'mike.ana@example.com',
        gender: 'men',
        avatar: 1,
        favourite: false
      },
      {
        id: uuid(),
        name: 'Seth Frazier',
        address: '7396 E North St',
        phone: '(560) 180-4143',
        email: 'seth.frazier@example.com',
        gender: 'men',
        avatar: 2,
        favourite: false
      },
      {
        id: uuid(),
        name: 'Rosemary Porter',
        address: '5267 Cackson St',
        phone: '(497) 160-9776',
        email: 'rosemary.porter@example.com',
        gender: 'women',
        avatar: 3,
        favourite: false
      },
      {
        id: uuid(),
        name: 'Debbie Schmidt',
        address: '3903 W Alexander Rd',
        phone: '(867) 322-1852',
        email: 'debbie.schmidt@example.com',
        gender: 'women',
        avatar: 4,
        favourite: true
      }
    ],
    currentContact: "",
    findContact: "",
  }
  componentDidMount() {
    this.UpdateContactList();
  }
  UpdateContactList = () => {
    fetch(this.URL)
      .then(response => {
        return response.json();
      }).then((data) => {
        if (data == null) {
          this.setState({
            list: [],
          });
        } else {
          this.setState({
            list: data,
          });
        }
      }).catch((err) => console.log(err))
  }

  async SaveDate(newList) {
    await fetch(this.URL, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newList),
    }).then((response) => {
      console.log(response);
    }).catch((err) => console.log(err));
  };
  onSearch = (contactName) => {
    this.setState({
      findContact: contactName,
    });
  };
  onShowContactList = (list, findContact) => {
    if (findContact.length === 0) {
      return list;
    }
    return list.filter((item) => {
      return item.name.toLowerCase().indexOf(findContact.toLowerCase()) > -1;
    });
  };
  isFavourite = (id) => {
    const idx = this.state.list.findIndex((el) => el.id === id);
    const tmp = this.state.list.slice();
    tmp[idx].favourite = !tmp[idx].favourite;
    this.setState({
      favourite: this.tmp
    });
    this.SaveDate(this.state.list);
  };
  deleteItem = (id) => {
    const idx = this.state.list.findIndex((el) => el.id === id);
    const tmp = this.state.list.slice();
    tmp.splice(idx, 1);
    this.setState({ list: tmp });
    this.SaveDate(this.state.list)
  };

  editContact = (id) => {
    const index = this.state.list.findIndex((elem) => elem.id === id);
    const currentContact = this.state.list[index];
    this.setState({
      currentContact: currentContact,
    });
  };
  confirmChanges = (
    id,
    name,
    address,
    phone,
    email,
    avatar,
    gender
  ) => {
    const index = this.state.list.findIndex((elem) => elem.id === id);
    let editedContact = {
      id: id,
      name: name,
      address: address,
      avatar: avatar,
      phone: phone,
      gender: gender,
      email: email,
      favourite: false,
    };
    const partOne = this.state.list.slice(0, index);
    const partTwo = this.state.list.slice(index + 1);
    const newList = [...partOne, editedContact, ...partTwo];
    this.setState({
      list: newList,
    });
    this.SaveDate(newList)
  }
  render() {
    const showContacts = this.onShowContactList(
      this.state.list,
      this.state.findContact
    );
    return (
      <Router>
        <Header onSearch={this.onSearch} />
        <Switch>
          <Route path="/" exact render={() => (
            <ContactList
              contactList={showContacts}
              isFavourite={this.isFavourite}
              onDeleted={this.deleteItem}
              editContact={this.editContact}
            />
          )} />
          <Route path="/edit" exact render={() => (
            <EditContact
              currentContact={this.state.currentContact}
              confirmChanges={this.confirmChanges}
            />
          )} />
          <Route component={<NotFound />} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))