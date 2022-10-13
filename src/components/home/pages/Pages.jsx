import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Home from '../Home'

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
