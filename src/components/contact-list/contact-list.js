import React, { Fragment } from 'react';
import './contact-list.css';
import ContactItem from '../contact-item/contact-item.js'

const ContactList = ({ contactList, isFavourite, onDeleted, editContact }) => {
    const list = contactList.map((item) => {
        return (
            <ContactItem
                name={item.name}
                address={item.address}
                phone={item.phone}
                email={item.email}
                key={item.id}
                gender={item.gender}
                avatar={item.avatar}
                favourite={item.favourite}
                isFavourite={() => isFavourite(item.id)}
                onDelete={() => onDeleted(item.id)}
                editContact={() => editContact(item.id)} />
        )
    })
    return (
        <Fragment>
            <div className="container">
                <div className="card card-default" id="card_contacts">
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <ul className="list-group pull-down" id="contact-list">
                            {list.length !== 0 ? list : <h2>Contact list is empty</h2>}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactList;