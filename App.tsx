import React from 'react'
import AppContainer from './src/navigation'
import { Setup } from './src/db'
import './src/icons'

export default class App extends React.Component {
  componentDidMount() {
    Setup()
  }
  public render() {
    return <AppContainer />
  }
}
