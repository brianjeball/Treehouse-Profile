import React, { Component } from 'react';

// import './App.css';

import axios from 'axios'

import MainProfile from './components/MainProfile';
import Badges from './components/Badges'
import Points from './components/Points'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        profile: {},
        username: 'masonbarton2'
    }
}

componentDidMount(){
  this.getProfile()
}

getProfile = () => {
  axios({
    method: 'get',
    url: `https://teamtreehouse.com/${this.state.username}.json`
  }).then( (res) => {
    this.setState({profile: res.data})
    console.log(res.data)
  })
}

  render() {
    return (
      <div>
      {/* console.log(this.state.profile) */}
        <MainProfile profile={this.state.profile}/>
        <Points points={this.state.profile.points}/>
        <Badges badges={this.state.profile.badges}/>
      </div>
    );
  }
}

export default App;
