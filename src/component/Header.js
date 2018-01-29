import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

class Header extends Component {
    render(){
        return(
        <div class="ui inverted vertical footer segment">
            <div class="ui container">
                <div class="ui stackable inverted divided equal height stackable grid">
                    <div class="ui grid">
                        <div class="four wide column">LOGO</div>
                        <div class="four wide column">LOGIN</div>
                        <div class="four wide column">REGISTER</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Header