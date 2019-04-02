import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';



export default class LoginForm extends Component {

    loginUsers = event => {
        event.preventDefault();       
        Meteor.loginWithPassword(this.email.value, this.password.value, (err) => {
            if(!err) this.props.client.resetStore(); 
            console.log(err);
        });
    };

    render(){
        return (
            <div className="row">
                     
                <form onSubmit={this.loginUsers} className="col s12">
                    <div className="row">

                    <div className="input-field col s6">
                        <input type="email" ref={ input => (this.email = input) } className="validate" />
                        <label>Email</label>
                     </div>

                     <div className="input-field col s6">
                        <input type="password" ref={ input => (this.password = input) } className="validate" />
                        <label>Password</label>
                     </div>

                    <button type="submit" className="waves-effect waves-light btn">Login</button>
                   
                    </div>
                </form>
            </div>
        )
    }
}