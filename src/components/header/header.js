import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

class Header extends React.Component {
    state = {
        search: "",
    };

    onSearch = (event) => {
        const value = event.target.value;
        // event.stopPropagation();
        this.setState({
            search: value,
        });
        this.props.onSearch(value);
    };
    render() {
        return (
            <div className="container">
                <div className='row'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Contact list</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/addContact">Add contact</Link>
                                </li>
                            </ul>
                            <form
                                className="form-inline my-2 my-lg-0 float-right"
                            >
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={this.onSearch}
                                />
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;