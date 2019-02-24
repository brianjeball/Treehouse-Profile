import React, { Component } from 'react';
import './App.css';

import axios from 'axios'
import MainProfile from './components/MainProfile';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        profile: {},
        username: 'brianjeball'
    }
}

componentDidMount(){
  this.getProfile()
}

getProfile = () => {
  axios({
    method: 'get',
    url: `https://teamtreehouse.com/brianjeball.json`
  }).then( (res) => {
    this.setState({profile: res.data})
    console.log(res.data)
  })
}

  render() {
    return (
      // console.log(this.state.profile)
      <MainProfile profile={this.state.profile}/>
    );
  }
}

export default App;
