// Needed Globally for https://typeorm.io/#/
import 'reflect-metadata'

// Regular Imports
import React from 'react'
import AppContainer from './src/navigation'
import { connect, Set } from './src/db'
import './src/icons'

export default class App extends React.Component {
  async componentDidMount() {
    try {
      await connect()
      console.log('Connected to db')

      const newSet = new Set()
      user.name = 'Core Set 2020'
      user.code = 'm20'
      user.arenaCode = 'm20'
      user.keyrune = 'm20'
      await newSet.save()
    } catch (err) {
      console.log('error setting up db', err)
    }
  }
  public render() {
    return <AppContainer />
  }
}
