import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {Redirect} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    axios.post("https://app2197.herokuapp.com/login",{
        "email":document.getElementById("emailid").value,
        "password":document.getElementById("pwd").value
    }).then(res =>{
        if(res.data.status && res.data.code === 1){
            console.log(res.data.msg)
            setMessage(res.data.msg)
            // setMessage(res.data.email)

        }else if(res.data.status){
          return <Redirect to='/' />
        }   
    })
  }

  return (
    <div className="Login">
        <h4>{message}</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            id="emailid"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}