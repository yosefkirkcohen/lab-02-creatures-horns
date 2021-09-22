import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Dropdown from './Dropdown.js'
import ImageList from './ImageList';
import images from './data'




export default class App extends Component {
  state = {keyword: '0',
           horns: 0
}

  handleKeyword = (e) => {
    this.setState({keyword: e.target.value })
}
  handleHorns = (e) => {
    this.setState({horns: Number(e.target.value)})
  }

  render() {

    const filteredImages = images
  .filter(entry => entry.keyword === this.state.keyword || this.state.keyword === '0')
  .filter(entry => entry.horns === this.state.horns || this.state.horns === 0)
    
  return (
    <div className="App">
      <header>
              <h1>Title</h1>
              <Dropdown 
                handlingShit={this.handleKeyword}
                arrOfOptions={[
                  'narwhal', 'rhino', 'unicorn'
                ]}
              />
              <Dropdown 
                handlingShit={this.handleHorns}
                arrOfOptions={[
                  1, 2, 3
                ]}
              />
      </header>
      <ImageList 
        filteredList={filteredImages}
        state={this.state}
      />
    </div>
  );}
}
