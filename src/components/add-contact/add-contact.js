import React from 'react';
import { Redirect } from 'react-router-dom'
import uuid from 'react-uuid';
import './add-contact.css';

export default class AddContact extends React.Component {

    state = {
        id: uuid(),
        name: '',
        address: '',
        phone: '',
        email: '',
        gender: '',
        avatar: '',
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
    getGender = (event) => {
        console.log(event.target.value)
        this.setState({
            gender: event.target.value,
        });
    };
    onSendData = (event) => {
        event.preventDefault();
        const { id, name, address, phone, email, avatar, gender } = this.state;
        this.props.onAddContact(
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
        const { onAddContact } = this.props;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
        if (this.state.isRedirect) {
            return <Redirect to="/" />;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ">
                        <h1>Add contact</h1>
                        <form
                            className="addForm d-flex flex-column"
                            onSubmit={this.onSendData}
                        >
                            <label>
                                Name:
                            <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    required
                                    onChange={this.getName} />
                            </label>
                            <label>
                                Address:
                            <input
                                    name="address"
                                    type="text"
                                    className="form-control"
                                    value={address}
                                    required
                                    onChange={this.getAddress} />
                            </label>
                            <label>
                                Phone:
                            <input
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                    value={phone}
                                    required
                                    onChange={this.getTelNumber} />
                            </label>
                            <label>
                                Email:
                            <input
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    value={email}
                                    required
                                    onChange={this.getEmail} />
                            </label>
                            <label>
                                Gender:
                                <input
                                    name="genderR"
                                    type="radio"
                                    className="radio ml-2"
                                    value={'men'}
                                    required
                                    onChange={this.getGender}
                                /> Men
                                <input
                                    name="genderR"
                                    type="radio"
                                    className="radio ml-2"
                                    value={'women'}
                                    required
                                    onChange={this.getGender}
                                /> Women
                            </label>
                            <label>
                                Avatar:
                            <input
                                    name="avatar"
                                    type="number"
                                    min="1"
                                    max="99"
                                    className="form-control"
                                    value={avatar}
                                    required
                                    onChange={this.getAvatar} />
                            </label>
                            <br />
                            <button className="btn btn-success" type="submit">
                                Save chages
                            </button>

                        </form>
                    </div>
                    <div className="col-md-4">
                        {avatar.length !== 0 ? (
                            <img
                                className="rounded-circle mx-auto mt-5 d-block img-fluid edit_photo"
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