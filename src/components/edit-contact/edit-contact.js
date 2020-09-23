import React from 'react';
import { Link } from 'react-router-dom'
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
        favourite: this.props.currentContact.favourite,
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        const { confirmChanges } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col ">
                        <h1>Edit contact</h1>
                        <form className="editForm">
                            <label>
                                Name:
                            <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <label>
                                Address:
                            <input
                                    name="address"
                                    type="text"
                                    className="form-control"
                                    value={this.state.address}
                                    onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <label>
                                Phone:
                            <input
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                    value={this.state.phone}
                                    onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <label>
                                Email:
                            <input
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <label>
                                Gender:
                            <input
                                    name="gender"
                                    type="text"
                                    className="form-control"
                                    value={this.state.gender}
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
                                    value={this.state.avatar}
                                    onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <Link
                                to="/"
                                onClick={confirmChanges(this.state)}
                            >
                                <button
                                    className="btn btn-primary mb-2"
                                >
                                    Confirm changes
                            </button>
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}