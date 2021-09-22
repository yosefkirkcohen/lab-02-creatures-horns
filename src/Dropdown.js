import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handlingShit}>
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

{/* <option value='narwhal'>narwhal</option>
<option value='rhino'>rhino</option>
<option value='unicorn'>unicorn</option> */}