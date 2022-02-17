import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { useMoralis } from "react-moralis";
import { useState } from "react";
import './App.css';

function App() {
  const { authenticate, signup, isAuthenticated, user } = useMoralis();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(username, password, email);
  }

  return (
    <div className="App">
      <header className="App-header">
      <button
        color="white"
        size="small"
        onClick={() => authenticate({signingMessage:"Hello welcome to NiftyGram", onComplete: () => alert("🎉") })}
      >                  
          Enter Niftgram
      </button>

      <form onSubmit={handleSubmit}>
      <label>UserName:
        <input
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>Password:
        <input
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" />
      </form>
      
        
      </header>
    </div>
  );
}

export default App;
