import React, {Component} from 'react';
import { Accounts } from 'meteor/accounts-base';



export default class RegisterForm extends Component {

    registerUser = event => {
        event.preventDefault();

        Accounts.createUser({
            email: this.email.value,
            password: this.password.value
        }, (err) => {
            if(!err) this.props.client.resetStore();
            console.log(err)
        });
    };

    render(){
        return (
            <div className="row">
                     
                <form onSubmit={this.registerUser} className="col s12">
                    <div className="row">

                    <div className="input-field col s6">
                        <input type="email" ref={ input => (this.email = input) } className="validate" />
                        <label>Email</label>
                     </div>

                     <div className="input-field col s6">
                        <input type="password" ref={ input => (this.password = input) } className="validate" />
                        <label>Password</label>
                     </div>

                    <button type="submit" className="waves-effect waves-light btn">Register</button>
                   
                    </div>
                </form>
            </div>
        )
    }
}