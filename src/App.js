import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

class App extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then(response => {
      this.setState({ countries: response.data });
      })
      .catch(err => console.log(err));
  }
  
  render() {
    
    const countries = this.state.countries;
  
    return (
      <div className='App'>
        <div>
          <Navbar />
          <div className='container'>
            <div className='row'>
              <div className='col-5' style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                <div className='list-group'>
                  <CountriesList countries={countries} />
                </div>
              </div>
              <Switch>
                <Route exact path='/:cca3' render={props => <CountryDetails {...props} countries={countries} />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
