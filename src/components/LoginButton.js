import React from "react";
import { LinkContainer } from "react-router-bootstrap";


class LoginButton extends React.Component {
   
render() {

    return (
    <div style={{float: 'right'}}>
           
             <LinkContainer to="/Login">
              <button>Login</button>
            </LinkContainer>

    </div>
);
}
}

export default LoginButton;