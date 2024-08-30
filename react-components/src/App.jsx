import { useState } from 'react'
import './App.css'
import React from 'react';
import Badge from "./components/Badge.jsx"
import Banner from "./components/Banner/index.js"
import Card from "./components/Card.jsx"
import Switch from "./components/Switch.jsx"
import Button from "./components/Button/Button.jsx"
import { FiFileText } from "react-icons/fi";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="comp-container">
      <Badge color="green" shape="square">badge</Badge>
      <Badge color="blue" shape="square">badge</Badge>
      <Badge color="yellow" shape="square">badge</Badge>
      <Badge color="red" shape="square">badge</Badge>
      <div className="space"></div>
      <div className="switch-container">
       <Switch />
      </div>
      <div className="space"></div>

      <div className="btn-container">
        <Button variant="regular" size="lg">default</Button> 
        <Button variant="regular" size="sm">default</Button>  
        <Button variant="success" size="lg">success</Button>
        <Button variant="success" size="sm">success</Button>
        <Button variant="warning" size="lg">warning</Button>
        <Button variant="warning" size="sm">warning</Button>
        <Button variant="danger" size="lg">danger</Button>
        <Button variant="danger" size="sm">danger</Button>
      </div>

      <div className="space"></div>
      <Banner variant="success" title="Success">
        <Banner.Text>Some success text, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Banner.Text>
      </Banner>
      <Banner variant="warning" title="Warning">
        <Banner.Text>Some warning text, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Banner.Text>
        </Banner>
      <Banner variant="error" title="Some error title"/>
        <Banner variant="info" title="Some information title"/>
        <div className="space"></div>
      <Card icon={<FiFileText />} title="Card Title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
      <div className="space"></div>
    </div>
  )
}

export default App
