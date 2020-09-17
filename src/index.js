import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'react-uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


//include components

import ContactList from './components/contact-list/contact-list.js'


class App extends React.Component{
  state = {
    list:[
        {id:uuid(),name:'Mike Anamendolla', address:'5842 Hillcrest Rd', phone:'(870) 288-4149', email:'mike.ana@example.com',gender:'men',avatar:1,favourite:false},
        {id:uuid(),name:'Seth Frazier', address:'7396 E North St', phone:'(560) 180-4143', email:'seth.frazier@example.com',gender:'men',avatar:2,favourite:false},
        {id:uuid(),name:'Rosemary Porter', address:'5267 Cackson St', phone:'(497) 160-9776', email:'rosemary.porter@example.com',gender:'women',avatar:3,favourite:false},
        {id:uuid(),name:'Debbie Schmidt', address:'3903 W Alexander Rd', phone:'(867) 322-1852', email:'debbie.schmidt@example.com', gender:'women',avatar:4, favourite:true}
      ]    
  }
  isFavourite =(id)=>{
    const idx = this.state.list.findIndex((el) => el.id === id);
    const tmp = this.state.list.slice();
    tmp[idx].favourite = !tmp[idx].favourite;
    this.setState({
      favourite: this.tmp
    });
  }
  deleteItem = (id) => {
    const idx = this.state.list.findIndex((el) => el.id === id);
    const tmp = this.state.list.slice();
    tmp.splice(idx,1);
    this.setState({list:tmp})
  }
  render (){
    return (
      <div className="container">
        <h1>Contact list</h1>
        {/* <SearchEdit /> */}
        <div className="card card-default" id="card_contacts">
            <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
              <ContactList  
                contactList={this.state.list} 
                isFavourite={this.isFavourite} 
                onDeleted = {this.deleteItem}
              />
            </div>
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))