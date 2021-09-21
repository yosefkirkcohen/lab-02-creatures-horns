import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <div>
                    Name is {this.props.title}
                </div>
                <img src={this.props.url} alt={this.props.description}/>
                <p>Horns: {this.props.horns}</p>
            </div>
        )
    }
}
