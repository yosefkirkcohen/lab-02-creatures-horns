import React, { Component } from 'react'

class Header extends Component {

    handleStuff = (e) => {
        this.setState({keyword: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Title</h1>
                <select onChange={this.handleStuff}>
                    <option value='narwhal'>narwhal</option>
                    <option value='rhino'>rhino</option>
                    <option value='unicorn'>unicorn</option>
                </select>
            </div>
        )
    }
}
