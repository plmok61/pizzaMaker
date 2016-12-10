import React from 'react'

const SizeButtons = ({ sizes, fetchPizza }) => (
  <div>
    {
      sizes.map((size, key) => (
        <button 
          onClick={() => this.fetchPizza(size)}
          key={key}
        >
          {size}
        </button>
      ))
    }
  </div>
)

export default SizeButtons