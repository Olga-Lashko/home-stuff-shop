import React, { Component } from 'react'

export class Categiries extends Component {
    constructor (props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'all'
                },
                {
                    key: 'chairs',
                    name: 'chairs'
                },
                {
                    key: 'tables',
                    name: 'tables'
                },
                {
                    key: 'lighting',
                    name: 'lighting'
                },
                {
                    key: 'bedroom',
                    name: 'bedroom'
                },
                {
                    key: 'sofas',
                    name: 'sofas'
                },
                {
                    key: 'storage',
                    name: 'storage'
                },
                {
                    key: 'decor',
                    name: 'decor'
                }

            ]
        }

    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categiries