// Needed Globally for https://typeorm.io/#/
import 'reflect-metadata'

// Regular Imports
import React from 'react'
import AppContainer from './src/navigation'
import { connect } from './src/db'
import { get, set } from './src/util/storage'
import { setup } from './src/util/setup'
import './src/icons'

export default class App extends React.Component {
  state = { connected: false }
  async componentDidMount() {
    try {
      await connect()
      this.setState({ connected: true })
      const hasLaunched = await get('first_launch')
      if (!hasLaunched) {
        await setup()
        await set('first_launch', 'true')
      }
    } catch (err) {
      console.log('error setting up db', err)
    }
  }
  public render() {
    if (!this.state.connected) {
      return null
    }
    return <AppContainer />
  }
}
