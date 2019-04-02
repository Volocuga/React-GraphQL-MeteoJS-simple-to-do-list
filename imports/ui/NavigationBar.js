import React, {Component} from 'react';

export default class NavigationBar extends Component {

    logout = (props) => {
        Meteor.logout();
        this.props.client.resetStore();
    };

    render() {
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a>Sass</a></li>
                        <li><a>Components</a></li>
                        <li onClick={this.logout}><a>Logout</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}