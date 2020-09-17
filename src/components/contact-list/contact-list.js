import React from 'react';
import './contact-list.css';
import ContactItem from '../contact-item/contact-item.js'

const ContactList = ({contactList, isFavourite,onDeleted})=>{
    const list = contactList.map((item)=>{
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
                isFavourite={()=>isFavourite(item.id)}
                onDelete = {()=> onDeleted(item.id)}/>)
    })
    return(
        <ul className="list-group pull-down" id="contact-list">
            {list}
        </ul>
    )
}

export default ContactList;