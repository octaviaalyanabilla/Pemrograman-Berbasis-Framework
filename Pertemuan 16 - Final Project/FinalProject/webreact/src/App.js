import './App.css';
import Footer from './components/Footer';
import NavbarComponent from './components/NavbarComponent'
import Home from './components/HomePage'
import About from './components/About'
import Product from './components/MainContent'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Registrasi from './components/Login';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Cart from './components/new/Cart';
import { ChakraProvider } from '@chakra-ui/react'

export const AuthContext = React.createContext(null)

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
  
    <>
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        {/* <Header/> */}
        <NavbarComponent />
        {/* <MainContent/> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/products" component={Product} />
            <Route  path="/about" component={About} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/login" component={Login} />
            <Route  path="/cart" component={Cart} />
            <Route  path="/registrasi" component={Registrasi} />


            {/* <Redirect to="/" /> */}
          </Switch>
        </BrowserRouter>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;