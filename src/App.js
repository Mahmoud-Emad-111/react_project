import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route,Routes ,Router} from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Index from './component/index';
import Contact from './component/contact/contact';

class  App  extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Navbar/>
        
          <Routes>
            <Route exact path='/'  element ={<Index/>}/>
            <Route path="/react_project" element={<Index/>}/>
            <Route  path='/contact' element ={<Contact/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}

export default App;
