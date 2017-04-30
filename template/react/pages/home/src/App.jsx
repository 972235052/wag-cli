import React from 'react'
import Hello from 'components/Hello'
import '../assets/style.styl'

export class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'React'
    }
  }

  render () {
    return (
      <Hello name={this.state.name}/>
    )
  }
}
