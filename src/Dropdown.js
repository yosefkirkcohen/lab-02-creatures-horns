import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handlingShit}>
                    <option value='0'>
                        All
                    </option>
                    {
                        this.props.arrOfOptions.map(option => {return <option value={option}>
                            {option}
                        </option> })
                    }
              </select>
            </div>
        )
    }
}

