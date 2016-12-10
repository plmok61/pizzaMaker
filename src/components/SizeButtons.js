import React from 'react'

const SizeButtons = ({ sizes, fetchPizza }) => (
  <div>
    {
      sizes.map((size, key) => (
        <button 
          onClick={() => fetchPizza(size)}
          key={key}
        >
          {size}
        </button>
      ))
    }
  </div>
)

export default SizeButtons