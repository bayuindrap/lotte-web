import React from 'react';
import { Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import './App.css';
import ProductDetail from './pages/ProductDetail';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      }
  }

  
  render() { 
    return ( 
      <div className='App'>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product-detail' element={<ProductDetail/>} />
        </Routes>
      </div>
     );
  }
}
 
export default App;
