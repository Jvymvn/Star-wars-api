import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout/Index'
import { Provider } from './Context'

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <SearchForm />
            <div className='container'>
              <Switch>
                <Route exact path="/" component={Index} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
