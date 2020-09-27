import React from 'react';
import { Redirect } from 'react-router-dom'
import './edit-contact.css';

export default class EditContact extends React.Component {

    state = {
        id: this.props.currentContact.id,
        name: this.props.currentContact.name,
        address: this.props.currentContact.address,
        phone: this.props.currentContact.phone,
        email: this.props.currentContact.email,
        gender: this.props.currentContact.gender,
        avatar: this.props.currentContact.avatar,
        isRedirect: false,
    };

    getAvatar = (event) => {
        this.setState({
            avatar: event.target.value,
        });
    };

    getName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    getTelNumber = (event) => {
        this.setState({
            phone: event.target.value,
        });
    };
    getAddress = (event) => {
        this.setState({
            address: event.target.value,
        });
    };

    getEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    };
    onSendData = (event) => {
        event.preventDefault();
        const { id, name, address, phone, email, avatar, gender } = this.state;
        this.props.confirmChanges(
            id,
            name,
            address,
            phone,
            email,
            avatar,
            gender
        );
        this.setState({
            isRedirect: true,
        });
    };
    render() {
        const { name, address, phone, email, avatar, gender } = this.state;
        const { confirmChanges } = this.props;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
        if (this.state.isRedirect) {
            return <Redirect to="/" />;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 ">
                        <h1>Edit contact</h1>
                        <form
                            className="editForm"
                            onSubmit={this.onSendData}
                        >
                            <label>
                                Name:
                            <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={this.getName} />
                            </label>
                            <br />
                            <label>
                                Address:
                            <input
                                    name="address"
                                    type="text"
                                    className="form-control"
                                    value={address}
                                    onChange={this.getAddress} />
                            </label>
                            <br />
                            <label>
                                Phone:
                            <input
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                    value={phone}
                                    onChange={this.getTelNumber} />
                            </label>
                            <br />
                            <label>
                                Email:
                            <input
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    value={email}
                                    onChange={this.getEmail} />
                            </label>
                            <br />
                            <label>
                                Gender:
                            <input
                                    name="gender"
                                    type="text"
                                    className="form-control"
                                    value={gender}
                                    onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <label>
                                Avatar:
                            <input
                                    name="avatar"
                                    type="number"
                                    min="1"
                                    max="99"
                                    className="form-control"
                                    value={avatar}
                                    onChange={this.getAvatar} />
                            </label>
                            <br />
                            <button className="btn btn-success" type="submit">
                                Save chages
                            </button>

                        </form>
                    </div>
                    <div className="col-md-2">
                        {avatar.length !== 0 ? (
                            <img
                                className="rounded-circle mx-auto d-block img-fluid edit_photo"
                                src={URL}
                            />
                        ) : (
                                <h3>No foto</h3>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}