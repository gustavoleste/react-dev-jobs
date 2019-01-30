
import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ResetCSS from './components/ResetCSS'
import Header from './components/Header'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Footer from './components/Footer'


const app = () => (
          <Router>
                    <Fragment>
                              <ResetCSS />
                              <Header />
                              <Switch>
                                        <Route exact path='/' component={Home}/>
                                        <Route path='/vagas/:id(frontendbr|react-brasil|backend-br)' component={Jobs}/>
                                        <Route component={Home}/>
                              </Switch>                             
                              <Footer />
                    </Fragment>
          </Router>
)

export default app