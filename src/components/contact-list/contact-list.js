import React, { Fragment } from 'react';
import './contact-list.css';
import ContactItem from '../contact-item/contact-item.js'

const ContactList = ()=>{
    return(
        <div className="card card-default" id="card_contacts">
            <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                <ul className="list-group pull-down" id="contact-list">
                <ContactItem />
                </ul>
            {/* <!--/contacts list--> */}
        </div>
    </div>
    )
}

export default ContactList;