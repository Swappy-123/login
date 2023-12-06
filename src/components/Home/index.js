// Write your code here

import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {change: true}

  onMode = () => {
    this.setState(prevState => ({change: !prevState.change}))
  }

  render() {
    const {change} = this.state
    const onUser = change ? 'Please Login' : <Message message="Welcome User" />
    const onLog = change ? <Login login="Login" /> : <Logout logout="Logout" />
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="head">{onUser}</h1>
          <button type="button" onClick={this.onMode} className="btn">
            {onLog}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
