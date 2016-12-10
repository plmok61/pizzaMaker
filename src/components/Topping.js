import React, { Component } from 'react'

export default class Topping extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  render () {
    const { topping, selected, toggleTopping } = this.props
    return (
      <div>
        <h4>{topping.name}</h4>
        <h4>${topping.price}</h4>
        <input 
          type='checkbox'
          checked={selected}
          onChange={()=> toggleTopping(topping.name)}
        />     
      </div>
    )
  }
}
