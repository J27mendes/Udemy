import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Routes from './Routes'

export default props =>
<BrowserRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
    </div>
</BrowserRouter>