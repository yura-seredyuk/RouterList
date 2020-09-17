import React from 'react';
import './contact-item.css';


export default class ContactItem extends React.Component{    
    render(){
        const {name,address,phone,email,gender,favourite,avatar,isFavourite,onDelete}= this.props
        const url = `https://api.randomuser.me/portraits/med/${gender}/${avatar}.jpg`
        let isNotFaourite = 'far fa-star'
        if (favourite){
            isNotFaourite = 'fas fa-star'
        }else {
            isNotFaourite = 'far fa-star'
        }
            return(
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src={url} alt={name} className="rounded-circle mx-auto d-block img-fluid" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span className={`${isNotFaourite} fa-2x text-success float-right pulse favourite`} title="favourite" onClick={isFavourite}></span>
                            <span className={`fas fa-trash-alt fa-2x text-success float-right pulse remove`} title="remove" onClick = {onDelete}></span>
                            <label className="name lead">{name}</label>
                            <br /> 
                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title={address}></span>
                            <span className="text-muted">{address}</span>
                            <br />
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title={phone}></span>
                            <span className="text-muted small">{phone}</span>
                            <br />
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title={email} title=""></span>
                            <span className="text-muted small text-truncate">{email}</span>
                        </div>
                    </div>
                </li>
            )
    }
}