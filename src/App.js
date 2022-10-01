
import React, { Component } from 'react'
import {
  Route, Routes, BrowserRouter
} from "react-router-dom";
import Landing from './pages/Landing';
import Event from './pages/Event';
import CreateEvent from './pages/CreateEvent';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {


  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </BrowserRouter>
      </div>

    )
  }
}

export default App